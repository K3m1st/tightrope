// src/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50">
            {/* Logo */}
            <div className="text-center mb-8">
                <img class="h-auto max-w-lg mx-auto" src="/logo.png" alt="Tightrope logo"></img>
                <p className="text-gray-700 text-lg mt-4 mb-16">Balance new<br></br>
                <span className="font-semibold">experiences</span><br></br>
                with new <br></br>
                <span className="font-semibold">connections</span></p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col space-y-6 mb-6">
                {/* "Link to" for navigation */}
                <Link to="/create-account"><button className="px-40 py-3 bg-black text-white rounded-full w-full">Create Account</button></Link>
                <Link to="/sign-in"><button className="px-40 py-3 bg-white text-black rounded-full w-full">Sign In</button></Link>
                <a href="#" className="text-center text-blue-600 mt-2">Trouble signing in?</a>
            </div>
             {/* Privacy Notice */}
             <p className="text-center text-xs text-gray-500 max-w-xs mx-auto mt-6">
                By tapping "Sign in", you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
            </p>
        </div>
    );
}

export default Welcome;
