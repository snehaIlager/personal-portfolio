'use client';
import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [bio, setBio] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u: User | null) => {
        if (u &&u.email === 'snehailager76@gmail.com') {
            setUser(u);
            loadBio();
          } else {
            alert("Access Denied 😤");
            signOut(auth);
          }
          
    });
    return () => unsub();
  }, []);

  const loadBio = async () => {
    const snap = await getDoc(doc(db, 'aboutMe', 'sneha'));
    if (snap.exists()) setBio(snap.data().bio);
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const saveBio = async () => {
    await setDoc(doc(db, 'aboutMe', 'sneha'), { bio });
    setStatus('Saved!');
    setTimeout(() => setStatus(''), 2000);
  };

  if (!user) {
    return (
      <main className="min-h-screen bg-dark text-light p-8">
        <h1 className="text-2xl font-bold text-accent mb-4">Admin Login</h1>
        <button
          className="bg-accent text-dark px-4 py-2 rounded-lg font-bold"
          onClick={handleLogin}
        >
          Sign in with Google
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-dark text-light p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-accent">Admin Panel</h1>
        <button className="text-sm underline" onClick={handleLogout}>Logout</button>
      </div>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="w-full h-64 p-4 rounded-md text-dark"
      />
      <button
        onClick={saveBio}
        className="mt-4 px-4 py-2 bg-accent text-dark font-semibold rounded-lg"
      >
        Save
      </button>
      {status && <p className="mt-2">{status}</p>}
    </main>
  );
}
