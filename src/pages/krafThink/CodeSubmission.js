import React, { useState, useCallback } from 'react';
import { Github, Code2, FileCode, CheckCircle, AlertCircle, ExternalLink, Send, Loader2 } from 'lucide-react';
import { db } from "../../services/firebase";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import emailjs from '@emailjs/browser';

function CodeSubmission() {
  const [githubLink, setGithubLink] = useState('');
  const [teamName, setTeamName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState(''); // Still used for input, but verified against Firestore
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const validateGithubUrl = useCallback((url) => {
    const githubRegex = /^https:\/\/github\.com\/[\w-]+\/[\w-]+(\/)?$/;
    return githubRegex.test(url.trim());
  }, []);

  const validateMobileNo = useCallback((number) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(number.trim());
  }, []);

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }, []);

  const checkRegistration = async (mobile, inputEmail) => {
    const q = query(
      collection(db, "hackathon_registrations"),
      where("teamLeader.mobile", "==", mobile)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return { isRegistered: false, leaderEmail: null };
    }
    const doc = querySnapshot.docs[0].data();
    const leaderEmail = doc.teamLeader.email;
    return { 
      isRegistered: leaderEmail === inputEmail, // Verify input email matches registered email
      leaderEmail: leaderEmail 
    };
  };

  const checkTeamSubmission = async (team) => {
    const q = query(
      collection(db, "submissions"),
      where("teamName", "==", team)
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const sendConfirmationEmail = async (submissionData) => {
    const emailParams = {
      team_name: submissionData.teamName,
      mobile: submissionData.mobile,
      github_link: submissionData.githubLink,
      submission_id: submissionData.submissionId,
      submitted_on: submissionData.submittedOn,
      to_email: submissionData.email // Use the verified leader email
    };

    try {
      await emailjs.send(
        "service_oh34q42",   // Your EmailJS Service ID
        "template_jit49at", // Your EmailJS Template ID
        emailParams,
        "FG0nWkLd_43JaXqVE"   // Your EmailJS Public Key
      );
      console.log("Confirmation email sent successfully");
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!githubLink.trim()) {
        throw { message: 'Please enter a GitHub repository link', type: 'required' };
      }
      if (!teamName.trim()) {
        throw { message: 'Please enter a team name', type: 'required' };
      }
      if (!mobile.trim()) {
        throw { message: 'Please enter a mobile number', type: 'required' };
      }
      if (!email.trim()) {
        throw { message: 'Please enter an email address', type: 'required' };
      }

      if (!validateGithubUrl(githubLink)) {
        throw { 
          message: 'Please enter a valid GitHub repository URL (https://github.com/username/repository)', 
          type: 'invalid' 
        };
      }

      if (!validateMobileNo(mobile)) {
        throw { 
          message: 'Please enter a valid 10-digit mobile number', 
          type: 'invalid' 
        };
      }

      if (!validateEmail(email)) {
        throw { 
          message: 'Please enter a valid email address', 
          type: 'invalid' 
        };
      }

      // Verify mobile and email registration
      const { isRegistered, leaderEmail } = await checkRegistration(mobile, email);
      if (!isRegistered) {
        throw { 
          message: 'Mobile number or email not verified. Contact Administrator info@kraftechnologies.com.', 
          type: 'verification' 
        };
      }

      // Check if team has already submitted
      const hasSubmitted = await checkTeamSubmission(teamName);
      if (hasSubmitted) {
        throw { 
          message: 'This team has already submitted a project. Only one submission per team is allowed.', 
          type: 'duplicate' 
        };
      }

      // Prepare submission data with verified leader email
      const submissionData = {
        githubLink: githubLink,
        teamName: teamName,
        mobile: mobile,
        email: leaderEmail, // Use the verified email from Firestore
        submittedAt: serverTimestamp(),
        status: 'done',
        submittedOn: new Date().toISOString()
      };

      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, "submissions"), submissionData);
      setSubmissionId(docRef.id);

      // Add submissionId to submissionData for email
      submissionData.submissionId = docRef.id;

      // Send confirmation email
      await sendConfirmationEmail(submissionData);

      setSubmitted(true);
      setGithubLink('');
      setTeamName('');
      setMobile('');
      setEmail('');
    } catch (err) {
      console.error("Submission error:", err);
      setError({
        message: err.message || 'Failed to submit project. Please try again.',
        type: err.type || 'server'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setGithubLink('');
    setTeamName('');
    setMobile('');
    setEmail('');
    setError(null);
    setSubmissionId('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto py-12 px-4">
        <section className="max-w-4xl mx-auto" aria-labelledby="submission-heading">
          <div className="text-center mb-12">
            <h2 id="submission-heading" className="text-4xl font-bold mb-4">Kraf Think 2025 Code Submission</h2>
            <p className="text-xl text-[#18CB96]">Submit your project for the Kraf Think 2025 Hackathon</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate aria-live="polite">
                <div className="mb-8">
                  <label htmlFor="team-name" className="block text-xl font-medium mb-2">
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="team-name"
                    className="bg-white/5 border border-gray-500 text-white text-lg rounded-lg block w-full p-4 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    placeholder="Enter your team name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    disabled={isLoading}
                    aria-invalid={!!error && error.type === 'required' && !teamName}
                    required
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="mobile" className="block text-xl font-medium mb-2">
                    Team Leader Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="bg-white/5 border border-gray-500 text-white text-lg rounded-lg block w-full p-4 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    disabled={isLoading}
                    aria-invalid={!!error && error.type === 'invalid' && !validateMobileNo(mobile)}
                    required
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="email" className="block text-xl font-medium mb-2">
                    Team Leader Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white/5 border border-gray-500 text-white text-lg rounded-lg block w-full p-4 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    placeholder="Enter team leader's email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    aria-invalid={!!error && error.type === 'invalid' && !validateEmail(email)}
                    required
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="github-link" className="block text-xl font-medium mb-2">
                    GitHub Repository Link
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Github className="text-gray-300" aria-hidden="true" />
                    </div>
                    <input
                      type="url"
                      id="github-link"
                      className="bg-white/5 border border-gray-500 text-white text-lg rounded-lg block w-full pl-12 p-4 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                      placeholder="https://github.com/username/repository"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      disabled={isLoading}
                      aria-invalid={!!error}
                      aria-describedby={error ? 'github-error' : undefined}
                      required
                    />
                  </div>
                  {error && (
                    <p id="github-error" className="mt-2 text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" aria-hidden="true" />
                      {error.message}
                    </p>
                  )}
                  <p className="mt-2 text-[#18CB96] text-sm">
                  Make sure your repository is public and contains all the necessary code and documentation. You can submit the link once it’s ready.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#18CB96] hover:bg-[#18CB96] disabled:bg-blue-400 text-black font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" aria-hidden="true" />
                      Submit Project
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8" role="alert">
                <CheckCircle size={64} className="mx-auto text-green-400 mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-2">Submission Successful!</h3>
                <p className="mb-6">Your project has been submitted successfully. Check your email for confirmation.</p>
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <p className="font-mono text-blue-300 break-all mt-2">GitHub: {githubLink || 'Check your email for confirmation'}</p>
                  {submissionId && (
                    <p className="text-sm text-gray-400 mt-2">
                      Submission ID: {submissionId}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleReset}
                  className="bg-[#18CB96] hover:bg-]#18CB70] text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            )}
          </div>

          <section className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl" aria-labelledby="instructions-heading">
            <div className="flex items-center mb-6">
              <FileCode size={28} className="text-blue-300 mr-3" aria-hidden="true" />
              <h3 id="instructions-heading" className="text-2xl font-bold">Submission Instructions</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold mb-2">Repository Requirements</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-100">
                  <li>Your repository must be public</li>
                  <li>Include a detailed README.md with setup instructions</li>
                  <li>Provide a demo video or link (if applicable)</li>
                  <li>Document any dependencies or special requirements</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold mb-2">Code Structure</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-100">
                  <li>Organize your code in a clear, maintainable structure</li>
                  <li>Include comments where necessary</li>
                  <li>Remove any unnecessary files or dependencies</li>
                  <li>Ensure your code runs without errors</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-xl font-semibold mb-2">Judging Criteria</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-100">
                  <li>Innovation and creativity</li>
                  <li>Technical complexity and implementation</li>
                  <li>User experience and design</li>
                  <li>Practical application and impact</li>
                  <li>Code quality and documentation</li>
                </ul>
              </div>
              
              <div className="mt-8 bg-blue-900/50 p-4 rounded-lg">
                <p className="flex items-start">
                  <AlertCircle size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Important:</strong> All submissions must be received by March 04, 2025, 11:59 PM PST. 
                    Late submissions will not be considered for judging.
                  </span>
                </p>
              </div>
              
              <div className="mt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors"
                >
                  View complete hackathon guidelines
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default CodeSubmission;