import React, { useState } from 'react';
import {
  User, Mail, Phone, Briefcase, GraduationCap,
  FileText, ChevronRight, ScrollText,
  Building, MapPin
} from 'lucide-react';
import { db, collection, addDoc } from "../services/firebase";

const positions = [
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'UI/UX Designer',
  'Product Manager',
  'Data Scientist',
  'QA Engineer',
  'Technical Writer'
];

function CareerRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    position: '',
    candidateType: 'fresher',
    location: '',
    resumeLink: '',
    additionalInfo: '',
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      try {
        await addDoc(collection(db, "kt_careerregistration"), formData);
        alert("Registration Successful!");
        setFormData({
          name: '',
          email: '',
          mobile: '',
          position: '',
          candidateType: 'fresher',
          location: '',
          resumeLink: '',
          additionalInfo: '',
          acceptTerms: false
        });
        setStep(1);
      } catch (error) {
        console.error("Error saving registration:", error);
        alert("Failed to submit. Try again.");
      }
    }
  };

  return (
    React.createElement("div", { className: "min-h-screen bg-black text-white p-6 relative overflow-hidden" },
      /* Background blur effects */
      React.createElement("div", { className: "absolute top-[-50%] left-[-20%] w-96 h-96 bg-[#1acb97] rounded-full filter blur-[150px] animate-pulse" }),
      React.createElement("div", { className: "absolute bottom-[-30%] right-[-10%] w-96 h-96 bg-[#1acb97] rounded-full filter blur-[150px] animate-pulse delay-1000" }),
      React.createElement("div", { className: "max-w-3xl mx-auto relative" },
        /* Progress indicator */
        React.createElement("div", { className: "flex justify-center mb-8" },
          React.createElement("div", { className: "flex items-center" },
            React.createElement("div", { className: `w-10 h-10 rounded-full flex items-center justify-center ${step === 1 ? 'bg-[#1acb97]' : 'bg-white text-black'}` }, "1"),
            React.createElement("div", { className: "w-20 h-1 bg-gray-700" }),
            React.createElement("div", { className: `w-10 h-10 rounded-full flex items-center justify-center ${step === 2 ? 'bg-[#1acb97]' : 'bg-gray-700'}` }, "2")
          )
        ),
        React.createElement("div", { className: "bg-black/40 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02]" },
          React.createElement("h1", { className: "text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-[#1acb97] bg-clip-text text-transparent" },
            step === 1 ? 'Candidate Registration' : 'Terms & Conditions'
          ),
          React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
            step === 1 ?
              React.createElement(React.Fragment, null,
                React.createElement("div", { className: "space-y-4" },
                  React.createElement("div", { className: "relative" },
                    React.createElement(User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                    React.createElement("input", {
                      type: "text",
                      name: "name",
                      value: formData.name,
                      onChange: handleInputChange,
                      placeholder: "Full Name",
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all",
                      required: true
                    })
                  ),
                  React.createElement("div", { className: "relative" },
                    React.createElement(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                    React.createElement("input", {
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleInputChange,
                      placeholder: "Email Address",
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all",
                      required: true
                    })
                  ),
                  React.createElement("div", { className: "relative" },
                    React.createElement(Phone, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                    React.createElement("input", {
                      type: "tel",
                      name: "mobile",
                      value: formData.mobile,
                      onChange: handleInputChange,
                      placeholder: "Mobile Number",
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all",
                      required: true
                    })
                  ),
                  React.createElement("div", { className: "relative" },
                    React.createElement(Briefcase, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                    React.createElement("select", {
                      name: "position",
                      value: formData.position,
                      onChange: handleInputChange,
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all appearance-none",
                      required: true
                    },
                      React.createElement("option", { value: "" }, "Select Position"),
                      positions.map((position) => (
                        React.createElement("option", { key: position, value: position },
                          position
                        )
                      ))
                    )
                  ),
                  React.createElement("div", { className: "relative" },
                    React.createElement(MapPin, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                    React.createElement("input", {
                      type: "text",
                      name: "location",
                      value: formData.location,
                      onChange: handleInputChange,
                      placeholder: "Current Location",
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all",
                      required: true
                    })
                  ),
                  React.createElement("div", { className: "flex gap-4" },
                    React.createElement("label", { className: "flex items-center space-x-2 cursor-pointer" },
                      React.createElement("input", {
                        type: "radio",
                        name: "candidateType",
                        value: "fresher",
                        checked: formData.candidateType === 'fresher',
                        onChange: handleInputChange,
                        className: "form-radio text-[#1acb97]"
                      }),
                      React.createElement("span", null, "Fresher")
                    ),
                    React.createElement("label", { className: "flex items-center space-x-2 cursor-pointer" },
                      React.createElement("input", {
                        type: "radio",
                        name: "candidateType",
                        value: "experienced",
                        checked: formData.candidateType === 'experienced',
                        onChange: handleInputChange,
                        className: "form-radio text-[#1acb97]"
                      }),
                      React.createElement("span", null, "Experienced")
                    )
                  ),
                  formData.candidateType === 'fresher' ? (
                    React.createElement("div", { className: "space-y-4" },
                      React.createElement("div", { className: "relative" },
                        React.createElement(GraduationCap, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                        React.createElement("input", {
                          type: "text",
                          name: "university",
                          value: formData.university || '',
                          onChange: handleInputChange,
                          placeholder: "University Name",
                          className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all"
                        })
                      ),
                      React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                        React.createElement("input", {
                          type: "text",
                          name: "branch",
                          value: formData.branch || '',
                          onChange: handleInputChange,
                          placeholder: "Branch",
                          className: "w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all"
                        }),
                        React.createElement("input", {
                          type: "text",
                          name: "specialization",
                          value: formData.specialization || '',
                          onChange: handleInputChange,
                          placeholder: "Specialization",
                          className: "w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all"
                        })
                      ),
                      React.createElement("input", {
                        type: "text",
                        name: "passingYear",
                        value: formData.passingYear || '',
                        onChange: handleInputChange,
                        placeholder: "Passing Year",
                        className: "w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all"
                      })
                    )
                  ) : (
                    React.createElement("div", { className: "space-y-4" },
                      React.createElement("div", { className: "relative" },
                        React.createElement(Building, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                        React.createElement("input", {
                          type: "text",
                          name: "currentCompany",
                          value: formData.currentCompany || '',
                          onChange: handleInputChange,
                          placeholder: "Current Company Name",
                          className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all"
                        })
                      ),
                      React.createElement("input", {
                        type: "text",
                        name: "experience",
                        value: formData.experience || '',
                        onChange: handleInputChange,
                        placeholder: "Total Years of Experience",
                        className: "w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all"
                      }),
                      React.createElement("textarea", {
                        name: "profile",
                        value: formData.profile || '',
                        onChange: handleInputChange,
                        placeholder: "Current Profile Description",
                        className: "w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all min-h-[100px]"
                      })
                    )
                  ),
                  React.createElement("div", { className: "relative" },
                    React.createElement(FileText, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1acb97]", size: 20 }),
                    React.createElement("input", {
                      type: "url",
                      name: "resumeLink",
                      value: formData.resumeLink,
                      onChange: handleInputChange,
                      placeholder: "Resume Link",
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all",
                      required: true
                    })
                  ),
                  React.createElement("div", { className: "relative" },
                    React.createElement(ScrollText, { className: "absolute left-3 top-4 text-[#1acb97]", size: 20 }),
                    React.createElement("textarea", {
                      name: "additionalInfo",
                      value: formData.additionalInfo,
                      onChange: handleInputChange,
                      placeholder: "Additional Information",
                      className: "w-full pl-12 pr-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:border-[#1acb97] focus:ring-1 focus:ring-[#1acb97] transition-all min-h-[100px]"
                    })
                  )
                )
              ) : (
              React.createElement("div", { className: "space-y-6" },
                React.createElement("div", { className: "prose prose-invert max-w-none" },
                  React.createElement("h2", { className: "text-xl font-semibold mb-4" }, "Terms and Conditions"),
                  React.createElement("p", { className: "text-gray-300" },
                    "By submitting this application, you agree to the following terms:"
                  ),
                  React.createElement("ul", { className: "list-disc pl-5 text-gray-300 space-y-2" },
                    React.createElement("li", null, "All information provided is accurate and truthful"),
                    React.createElement("li", null, "You consent to background verification if required"),
                    React.createElement("li", null, "Your data will be stored and processed as per our privacy policy"),
                    React.createElement("li", null, "You understand this application doesn't guarantee employment")
                  )
                ),
                React.createElement("label", { className: "flex items-center space-x-3 cursor-pointer" },
                  React.createElement("input", {
                    type: "checkbox",
                    name: "acceptTerms",
                    checked: formData.acceptTerms,
                    onChange: (e) => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked })),
                    className: "form-checkbox text-[#1acb97] rounded",
                    required: true
                  }),
                  React.createElement("span", null, "I accept the terms and conditions")
                )
              )
            ),
            React.createElement("button", {
              type: "submit",
              className: `w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 
                ${step === 1 ? 'bg-[#1acb97] hover:bg-[#15b386]' : formData.acceptTerms ? 'bg-[#1acb97] hover:bg-[#15b386]' : 'bg-gray-600 cursor-not-allowed'}
                transition-all duration-300 transform hover:scale-[1.02]`,
              disabled: step === 2 && !formData.acceptTerms
            },
              React.createElement("span", null, step === 1 ? 'Next Step' : 'Submit Application'),
              React.createElement(ChevronRight, { size: 20 })
            )
          )
        )
      )
    )
  );
}

export default CareerRegistration;
