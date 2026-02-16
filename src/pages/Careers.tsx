import { useState } from "react";
import { MapPin, Briefcase, IndianRupee, Clock, X, Upload, Plus, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
}

const jobs = [
  {
    id: 1,
    title: "Senior Physical Design Engineer",
    department: "Physical Design",
    location: "Bengaluru, India",
    type: "Full-Time",
    salary: "₹18,00,000 – ₹35,00,000 per annum",
    experience: "5–10 years",
    description:
      "Lead physical design implementation of complex SoC/ASIC blocks from netlist to GDSII across advanced nodes (7nm/5nm). Drive floorplanning, placement, CTS, routing, timing closure, and physical verification.",
    responsibilities: [
      "Lead PD implementation from floorplanning to GDSII signoff",
      "Perform timing closure, power analysis, and physical verification",
      "Collaborate with frontend and DFT teams for design convergence",
      "Mentor junior engineers and review design quality",
      "Develop and optimize PD flows using TCL/Python scripting",
    ],
  },
  {
    id: 2,
    title: "Design Verification Engineer",
    department: "Verification",
    location: "Bengaluru, India",
    type: "Full-Time",
    salary: "₹12,00,000 – ₹28,00,000 per annum",
    experience: "3–8 years",
    description:
      "Develop and execute UVM-based verification environments for complex SoC designs. Drive functional coverage closure and ensure first-time-right silicon through robust verification strategies.",
    responsibilities: [
      "Develop UVM testbenches and verification components",
      "Create constrained-random test scenarios and coverage models",
      "Debug RTL and verification environment issues",
      "Drive coverage closure to meet project milestones",
      "Collaborate with design and system teams for spec clarification",
    ],
  },
  {
    id: 3,
    title: "DFT Engineer",
    department: "DFT",
    location: "Bengaluru, India",
    type: "Full-Time",
    salary: "₹10,00,000 – ₹25,00,000 per annum",
    experience: "2–7 years",
    description:
      "Implement DFT architectures including scan insertion, ATPG, MBIST, and boundary scan. Work closely with physical design and verification teams to ensure seamless DFT integration.",
    responsibilities: [
      "Implement scan insertion and generate ATPG patterns",
      "Design and integrate MBIST and LBIST solutions",
      "Perform DFT rule checks and resolve violations",
      "Support test pattern bring-up on ATE platforms",
      "Optimize test coverage and pattern count",
    ],
  },
  {
    id: 4,
    title: "AI/ML Engineer – EDA Automation",
    department: "AI Automation",
    location: "Bengaluru, India",
    type: "Full-Time",
    salary: "₹15,00,000 – ₹32,00,000 per annum",
    experience: "3–8 years",
    description:
      "Apply machine learning techniques to optimize EDA design flows, predict design quality metrics, and automate repetitive engineering tasks in the semiconductor design lifecycle.",
    responsibilities: [
      "Develop ML models for timing prediction and design optimization",
      "Build automation frameworks for EDA tool flows",
      "Analyze design data to identify optimization opportunities",
      "Integrate AI solutions into existing design methodologies",
      "Collaborate with VLSI engineers to understand design challenges",
    ],
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  totalExperience: "",
  noticePeriod: "",
  currentCTC: "",
  expectedCTC: "",
  coverLetter: "",
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [education, setEducation] = useState<Education[]>([{ degree: "", institution: "", year: "" }]);
  const [experience, setExperience] = useState<Experience[]>([{ title: "", company: "", duration: "" }]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const addEducation = () => setEducation([...education, { degree: "", institution: "", year: "" }]);
  const removeEducation = (i: number) => setEducation(education.filter((_, idx) => idx !== i));
  const updateEducation = (i: number, field: keyof Education, value: string) => {
    const updated = [...education];
    updated[i][field] = value;
    setEducation(updated);
  };

  const addExperience = () => setExperience([...experience, { title: "", company: "", duration: "" }]);
  const removeExperience = (i: number) => setExperience(experience.filter((_, idx) => idx !== i));
  const updateExperience = (i: number, field: keyof Experience, value: string) => {
    const updated = [...experience];
    updated[i][field] = value;
    setExperience(updated);
  };

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setShowForm(true);
    setForm(initialForm);
    setEducation([{ degree: "", institution: "", year: "" }]);
    setExperience([{ title: "", company: "", duration: "" }]);
    setResumeFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your application! We will get back to you shortly.");
    setShowForm(false);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Join Our Team</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Build Your Career at <span className="text-gradient">Glitchip</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team of passionate engineers shaping the future of semiconductor design. We offer competitive compensation, a collaborative culture, and the opportunity to work on cutting-edge VLSI projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Competitive Pay", desc: "Industry-leading compensation packages" },
              { title: "Growth Path", desc: "Clear career progression & mentorship" },
              { title: "Cutting-Edge Work", desc: "Advanced node projects & latest tools" },
              { title: "Work-Life Balance", desc: "Flexible hours & hybrid work options" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 text-center h-full">
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Open Positions</h2>
            <p className="text-muted-foreground mt-2">Explore opportunities across our engineering teams.</p>
          </AnimatedSection>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 0.05}>
                <div className="glass rounded-xl p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">{job.title}</h3>
                      <p className="text-primary text-sm font-medium">{job.department}</p>
                    </div>
                    <button
                      onClick={() => handleApply(job)}
                      className="px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-glow shrink-0"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-primary" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><IndianRupee size={14} className="text-primary" /> {job.salary}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> {job.experience}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</p>
                    <ul className="space-y-1">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showForm && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto bg-background/80 backdrop-blur-sm">
          <div className="glass-strong rounded-2xl w-full max-w-3xl p-6 md:p-10 my-8 animate-scale-in">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">Apply for {selectedJob.title}</h2>
                <p className="text-sm text-muted-foreground">{selectedJob.department} · {selectedJob.location}</p>
              </div>
              <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input className={inputClass} placeholder="First Name *" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  <input className={inputClass} placeholder="Last Name *" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                  <input className={inputClass} type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <input className={inputClass} type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Education</h3>
                  <button type="button" onClick={addEducation} className="flex items-center gap-1 text-xs text-primary font-medium hover:underline">
                    <Plus size={14} /> Add Education
                  </button>
                </div>
                {education.map((edu, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-4 mb-3 relative">
                    <input className={inputClass} placeholder="Degree *" required value={edu.degree} onChange={(e) => updateEducation(i, "degree", e.target.value)} />
                    <input className={inputClass} placeholder="Institution *" required value={edu.institution} onChange={(e) => updateEducation(i, "institution", e.target.value)} />
                    <div className="flex gap-2">
                      <input className={inputClass} placeholder="Year" value={edu.year} onChange={(e) => updateEducation(i, "year", e.target.value)} />
                      {education.length > 1 && (
                        <button type="button" onClick={() => removeEducation(i)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg shrink-0">
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Experience</h3>
                  <button type="button" onClick={addExperience} className="flex items-center gap-1 text-xs text-primary font-medium hover:underline">
                    <Plus size={14} /> Add Experience
                  </button>
                </div>
                {experience.map((exp, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-4 mb-3">
                    <input className={inputClass} placeholder="Job Title" value={exp.title} onChange={(e) => updateExperience(i, "title", e.target.value)} />
                    <input className={inputClass} placeholder="Company" value={exp.company} onChange={(e) => updateExperience(i, "company", e.target.value)} />
                    <div className="flex gap-2">
                      <input className={inputClass} placeholder="Duration" value={exp.duration} onChange={(e) => updateExperience(i, "duration", e.target.value)} />
                      {experience.length > 1 && (
                        <button type="button" onClick={() => removeExperience(i)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg shrink-0">
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional */}
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">Additional Details</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <input className={inputClass} placeholder="Total Experience (years) *" required value={form.totalExperience} onChange={(e) => setForm({ ...form, totalExperience: e.target.value })} />
                  <input className={inputClass} placeholder="Notice Period" value={form.noticePeriod} onChange={(e) => setForm({ ...form, noticePeriod: e.target.value })} />
                  <input className={inputClass} placeholder="Current CTC (₹ LPA)" value={form.currentCTC} onChange={(e) => setForm({ ...form, currentCTC: e.target.value })} />
                </div>
                <input className={inputClass + " mb-4"} placeholder="Expected CTC (₹ LPA)" value={form.expectedCTC} onChange={(e) => setForm({ ...form, expectedCTC: e.target.value })} />
              </div>

              {/* Resume */}
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">Resume</h3>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl p-8 cursor-pointer hover:border-primary/50 transition-colors">
                  <Upload size={24} className="text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {resumeFile ? resumeFile.name : "Drop your resume here or click to browse"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files?.[0] || null)} />
                </label>
              </div>

              {/* Cover Letter */}
              <div>
                <textarea
                  className={inputClass + " min-h-[100px] resize-y"}
                  placeholder="Cover Letter (Optional)"
                  value={form.coverLetter}
                  onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-glow"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-4 rounded-lg glass text-foreground font-semibold hover:bg-secondary transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Careers;
