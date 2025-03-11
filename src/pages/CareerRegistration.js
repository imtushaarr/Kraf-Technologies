import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  User,
  FileText,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Building2,
  Shield,
  Clock,
  MapPin,
  ScrollText,
} from "lucide-react";
import { supabase } from "../services/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const positions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Data Scientist",
  "QA Engineer",
  "Technical Writer",
];

function CareerRegistration() {
  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    candidate_type: "fresher",
    location: "",
    resume_url: "",
    additional_info: "",
    accept_terms: false,
    college_name: "",
    passing_year: "",
    branch: "",
    company_name: "",
    experience_years: "",
    current_salary: "",
    employee_id: "",
    employee_name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "passing_year" || name === "experience_years" || name === "current_salary" ? Number(value) || "" : value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, candidate_type: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, accept_terms: e.target.checked }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF and DOCX files are allowed.");
      return;
    }

    setUploading(true);
    const filePath = `resumes/${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from("resumes").upload(filePath, file);

    if (error) {
      toast.error(`Upload failed: ${error.message}`);
      console.error("Storage Error:", error);
      setUploading(false);
      return;
    }

    const publicUrl = supabase.storage.from("resumes").getPublicUrl(filePath).data.publicUrl;
    setFormData((prev) => ({ ...prev, resume_url: publicUrl }));
    toast.success("Resume uploaded successfully!");
    setUploading(false);
  };

  const generateRegistrationId = () => {
    const prefix = "KT01CR";
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${randomNum}`;
  };

  const sendRegistrationEmail = (registrationId, emailData) => {
    const templateParams = {
      to_email: emailData.email,
      to_name: emailData.name,
      registration_id: registrationId,
      position: emailData.position,
      registration_time: emailData.registration_time,
      registration_date: emailData.registration_date,
    };

    console.log("Sending email with params:", templateParams);
    emailjs
      .send(
        "service_oh34q42",
        "template_hhpc1y8",
        templateParams,
        "FG0nWkLd_43JaXqVE"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send registration email.");
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      const requiredFields = [
        "name",
        "email",
        "mobile",
        "position",
        "candidate_type",
        "location",
        "resume_url",
      ];

      const missingFields = requiredFields.filter((field) => !formData[field]);
      if (missingFields.length > 0) {
        toast.error(`Please fill all required fields: ${missingFields.join(", ")}`);
        return;
      }

      if (formData.candidate_type === "fresher") {
        const fresherFields = ["college_name", "passing_year", "branch"];
        const missingFresherFields = fresherFields.filter((field) => !formData[field]);
        if (missingFresherFields.length > 0) {
          toast.error(`Please fill all fresher fields: ${missingFresherFields.join(", ")}`);
          return;
        }
        const maxYear = 2035; 
        if (!formData.passing_year || formData.passing_year < 1900 || formData.passing_year > maxYear) {
          toast.error(`Please enter a valid passing year (1900-${maxYear})`);
          return;
        }
      }

      setStep(2);
    } else {
      if (!formData.accept_terms) {
        toast.error("Please accept the terms and conditions.");
        return;
      }

      const registrationId = generateRegistrationId();
      const now = new Date();
      const registrationTime = now.toTimeString().split(" ")[0];
      const registrationDate = now.toISOString().split("T")[0];

      const submissionData = {
        ...formData,
        passing_year: formData.passing_year ? Number(formData.passing_year) : null,
        experience_years: formData.experience_years ? Number(formData.experience_years) : null,
        current_salary: formData.current_salary ? Number(formData.current_salary) : null,
        registration_id: registrationId,
        registration_time: registrationTime,
        registration_date: registrationDate,
      };

      console.log("Submitting formData:", submissionData);
      const { error } = await supabase.from("kt_careerregistration").insert([submissionData]);

      if (error) {
        toast.error(`Submission failed: ${error.message} (Code: ${error.code})`);
        console.error("Database Error:", error);
      } else {
        const emailData = {
          email: formData.email,
          name: formData.name,
          position: formData.position,
          registration_time: registrationTime,
          registration_date: registrationDate,
        };
        sendRegistrationEmail(registrationId, emailData);
        toast.success(`Thank you for registration! We will send you a registration mail. Your Registration ID: ${registrationId}`);

        setFormData({
          name: "",
          email: "",
          mobile: "",
          position: "",
          candidate_type: "fresher",
          location: "",
          resume_url: "",
          additional_info: "",
          accept_terms: false,
          college_name: "",
          passing_year: "",
          branch: "",
          company_name: "",
          experience_years: "",
          current_salary: "",
          employee_id: "",
          employee_name: "",
        });
        setStep(1);
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative min-h-screen">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#18cb96]/50 rounded-full filter blur-[100px] md:w-96 md:h-96"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#18cb96]/50 rounded-full filter blur-[120px] md:w-72 md:h-72"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#18cb96]/50 rounded-full filter blur-[100px] md:w-64 md:h-64"></div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-6 md:py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 mt-8 md:mt-12 text-white">Candidate Registration</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Complete your profile to apply for exciting career opportunities with us.
            </p>
          </motion.div>

          <div className="mb-8 md:mb-12">
            <div className="flex justify-between mb-6 relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-800 -translate-y-1/2"></div>
              {[1, 2].map((item) => (
                <motion.div
                  key={item}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: step >= item ? 1 : 0.8,
                    opacity: step >= item ? 1 : 0.5,
                  }}
                  className="flex flex-col items-center relative z-10"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full blur-md ${step >= item ? "bg-[#18cb96]/50" : "bg-gray-700/30"}`}
                    ></div>
                    <div
                      className={`relative z-10 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-2 border-2
                        ${
                          step > item
                            ? "bg-[#18cb96] border-[#18cb96]"
                            : step === item
                            ? "bg-black border-[#18cb96]"
                            : "bg-black border-gray-700"
                        }`}
                    >
                      {step > item ? (
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      ) : item === 1 ? (
                        <User className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      ) : (
                        <FileText className="h-4 w-4 md:h-5 md:w-5 text-white" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${step >= item ? "text-white" : "text-gray-500"}`}
                  >
                    {item === 1 ? "Details" : "Terms"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-xl rounded-2xl"></div>
            <div className="relative z-10 backdrop-blur-sm bg-black/40 rounded-2xl p-6 md:p-10 shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-gray-800">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="details"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
                      <div className="p-2 bg-[#18cb96]/10 rounded-lg">
                        <User className="h-4 w-4 md:h-5 md:w-5 text-[#18cb96]" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white">Candidate Details</h3>
                        <p className="text-gray-400 text-xs md:text-sm">Provide your information and resume</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-gray-300 text-sm font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                          required
                        />
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 pl-12 rounded-lg text-white"
                            required
                          />
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="20" height="16" x="2" y="4" rx="2" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="mobile" className="text-gray-300 text-sm font-medium">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="(123) 456-7890"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 pl-12 rounded-lg text-white"
                            required
                          />
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="position" className="text-gray-300 text-sm font-medium">
                          Position <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-gray-300 px-4"
                          required
                        >
                          <option value="">Select Position</option>
                          {positions.map((pos) => (
                            <option key={pos} value={pos}>
                              {pos}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="location" className="text-gray-300 text-sm font-medium">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Current Location"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 pl-12 rounded-lg text-white"
                            required
                          />
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-gray-300 text-sm font-medium">
                        Candidate Type <span className="text-red-500">*</span>
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="candidate_type"
                            value="fresher"
                            checked={formData.candidate_type === "fresher"}
                            onChange={() => handleRadioChange("fresher")}
                            className="form-radio text-[#18cb96] border-gray-700 focus:ring-[#18cb96]"
                          />
                          <span className="text-gray-300">Fresher</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="candidate_type"
                            value="experienced"
                            checked={formData.candidate_type === "experienced"}
                            onChange={() => handleRadioChange("experienced")}
                            className="form-radio text-[#18cb96] border-gray-700 focus:ring-[#18cb96]"
                          />
                          <span className="text-gray-300">Experienced</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="candidate_type"
                            value="referral"
                            checked={formData.candidate_type === "referral"}
                            onChange={() => handleRadioChange("referral")}
                            className="form-radio text-[#18cb96] border-gray-700 focus:ring-[#18cb96]"
                          />
                          <span className="text-gray-300">Referral</span>
                        </label>
                      </div>
                    </div>

                    {formData.candidate_type === "fresher" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-3">
                          <label htmlFor="college_name" className="text-gray-300 text-sm font-medium">
                            College Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="college_name"
                            name="college_name"
                            value={formData.college_name}
                            onChange={handleInputChange}
                            placeholder="Enter your college name"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="passing_year" className="text-gray-300 text-sm font-medium">
                            Passing Year <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="passing_year"
                            name="passing_year"
                            type="number"
                            value={formData.passing_year}
                            onChange={handleInputChange}
                            placeholder="e.g., 2023"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="branch" className="text-gray-300 text-sm font-medium">
                            Branch <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                            placeholder="e.g., Computer Science"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {formData.candidate_type === "experienced" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-3">
                          <label htmlFor="company_name" className="text-gray-300 text-sm font-medium">
                            Current Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="company_name"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            placeholder="Enter your current company"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="experience_years" className="text-gray-300 text-sm font-medium">
                            Experience (Years) <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="experience_years"
                            name="experience_years"
                            type="number"
                            value={formData.experience_years}
                            onChange={handleInputChange}
                            placeholder="e.g., 3"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="current_salary" className="text-gray-300 text-sm font-medium">
                            Current Salary (Annual) <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="current_salary"
                            name="current_salary"
                            type="number"
                            value={formData.current_salary}
                            onChange={handleInputChange}
                            placeholder="e.g., 500000"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {formData.candidate_type === "referral" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-3">
                          <label htmlFor="employee_id" className="text-gray-300 text-sm font-medium">
                            Employee ID <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="employee_id"
                            name="employee_id"
                            value={formData.employee_id}
                            onChange={handleInputChange}
                            placeholder="Enter referring employee ID"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="employee_name" className="text-gray-300 text-sm font-medium">
                            Employee Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="employee_name"
                            name="employee_name"
                            value={formData.employee_name}
                            onChange={handleInputChange}
                            placeholder="Enter referring employee name"
                            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] h-12 rounded-lg text-white px-4"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <label htmlFor="resume" className="text-gray-300 text-sm font-medium">
                        Upload Resume <span className="text-red-500">*</span>
                      </label>
                      <div className="group border-2 border-dashed border-gray-700 hover:border-[#18cb96] transition-colors duration-300 rounded-xl p-6 text-center cursor-pointer bg-gray-900/30 backdrop-blur-sm">
                        <div className="relative mx-auto mb-4 w-16 h-16">
                          <div className="absolute inset-0 bg-[#18cb96]/20 rounded-full blur-md group-hover:bg-[#18cb96]/30 transition-all duration-300"></div>
                          <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gray-900/70 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-[#18cb96] transition-all duration-300">
                            <FileText className="h-7 w-7 text-gray-400 group-hover:text-[#18cb96] transition-colors duration-300" />
                          </div>
                        </div>
                        <p className="text-gray-300 mb-2 font-medium">
                          {formData.resume_url ? "Resume Uploaded" : "Drag and drop your resume here"}
                        </p>
                        {!formData.resume_url && (
                          <>
                            <p className="text-gray-500 mb-4 text-sm">or click to browse your files</p>
                            <p className="text-xs text-gray-500">Supported formats: PDF, DOCX (Max 5MB)</p>
                          </>
                        )}
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          disabled={uploading}
                        />
                        {!formData.resume_url && (
                          <button
                            className="mt-4 border border-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg text-gray-300"
                            disabled={uploading}
                            onClick={(e) => {
                              e.preventDefault();
                              fileInputRef.current.click();
                            }}
                          >
                            {uploading ? "Uploading..." : "Select File"}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="additional_info" className="text-gray-300 text-sm font-medium">
                        Additional Information
                      </label>
                      <textarea
                        id="additional_info"
                        name="additional_info"
                        value={formData.additional_info}
                        onChange={handleInputChange}
                        placeholder="Anything else you'd like us to know?"
                        className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 focus:border-[#18cb96] min-h-[120px] rounded-lg text-white px-4 py-2"
                      />
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50">
                      <Shield className="h-4 w-4 md:h-5 md:w-5 text-[#18cb96]" />
                      <p className="text-xs md:text-sm text-gray-400">
                        Your information is securely stored and only shared with our hiring team.
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="terms"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
                      <div className="p-2 bg-[#18cb96]/10 rounded-lg">
                        <ScrollText className="h-4 w-4 md:h-5 md:w-5 text-[#18cb96]" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white">Terms & Conditions</h3>
                        <p className="text-gray-400 text-xs md:text-sm">Review and accept our terms</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="text-gray-300">
                        <h4 className="text-base md:text-lg font-medium mb-2">Terms and Conditions</h4>
                        <p className="text-xs md:text-sm text-gray-400">
                          By submitting this application, you agree to the following terms:
                        </p>
                        <ul className="list-disc pl-5 text-xs md:text-sm text-gray-400 space-y-2 mt-2">
                          <li>All information provided is accurate and truthful</li>
                          <li>You consent to background verification if required</li>
                          <li>Your data will be stored and processed as per our privacy policy</li>
                          <li>You understand this application doesn’t guarantee employment</li>
                        </ul>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="accept_terms"
                          name="accept_terms"
                          checked={formData.accept_terms}
                          onChange={handleCheckboxChange}
                          className="form-checkbox h-5 w-5 text-[#18cb96] border-gray-700 rounded focus:ring-[#18cb96]"
                          required
                        />
                        <label htmlFor="accept_terms" className="text-gray-300 text-sm font-medium">
                          I accept the terms and conditions <span className="text-red-500">*</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-[#18cb96]/5 backdrop-blur-sm rounded-lg border border-[#18cb96]/20">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#18cb96]" />
                      <p className="text-xs md:text-sm text-gray-400">
                        Pro tip: Ensure all details are correct before submission for a smooth process.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row justify-between mt-8 md:mt-10 pt-6 border-t border-gray-800 gap-4">
                <button
                  onClick={() => setStep(1)}
                  disabled={step === 1}
                  className="flex items-center justify-center gap-2 border border-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300 h-12 px-6 rounded-lg text-gray-300 disabled:opacity-50 w-full sm:w-auto"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-[#18cb96] hover:bg-[#16b585] flex items-center justify-center gap-2 h-12 px-6 md:px-8 rounded-lg text-white shadow-[0_0_15px_rgba(24,203,150,0.3)] transition-all duration-300 w-full sm:w-auto"
                >
                  {step === 1 ? (
                    <>
                      Continue
                      <ChevronRight className="h-4 w-4" />
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerRegistration;