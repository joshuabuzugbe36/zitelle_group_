import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { NIGERIAN_STATES } from "../../constants/nigerianStates";

const CareerApply = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    jobTitle: "",
    experience: "",
    cv: null,
  });

  // ================= FETCH ACTIVE JOBS =================
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs/active");
        setJobs(res.data);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load jobs");
      }
    };

    fetchJobs();
  }, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE FILE =================
  const handleFile = (e) => {
    setForm({
      ...form,
      cv: e.target.files[0],
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.jobTitle) {
      return toast.error("Please fill required fields");
    }

    if (!form.cv) {
      return toast.error("Please upload your CV");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("location", form.location);
      formData.append("address", form.address);
      formData.append("jobTitle", form.jobTitle);
      formData.append("experience", form.experience);
      formData.append("cv", form.cv);

      await api.post("/applications", formData);

      toast.success("Application submitted successfully");

      // RESET FORM
      setForm({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        address: "",
        jobTitle: "",
        experience: "",
        cv: null,
      });

      e.target.reset();
    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data?.message || "Failed to submit application",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="career-apply">
      {/* TOP */}
      <div className="career-apply__top">
        <h2 className="career-apply__title">Apply Now</h2>

        <p className="career-apply__text">
          We are always looking for talented, hardworking and motivated people
          who want to grow with us. Fill in the form below and we will be in
          touch.
        </p>
      </div>

      {/* FORM */}
      <form className="career-apply__form" onSubmit={handleSubmit}>
        {/* ROW */}
        <div className="career-apply__grid">
          <div className="career-apply__field">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your Name.."
              required
            />
          </div>

          <div className="career-apply__field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email..."
              required
            />
          </div>
        </div>

        {/* ROW */}
        <div className="career-apply__grid">
          <div className="career-apply__field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+234 ---------"
            />
          </div>

          <div className="career-apply__field">
            <label>Location</label>
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
            >
              <option value="">Select...</option>

              {NIGERIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="career-apply__field">
          <label>Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address, City, Zip Code"
          />
        </div>

        {/* APPLYING FOR (DYNAMIC) */}
        <div className="career-apply__grid">
          <div className="career-apply__field">
            <label>Applying For *</label>

            <select
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              required
            >
              <option value="">Select a Job...</option>

              {jobs.length === 0 ? (
                <option disabled>No jobs available</option>
              ) : (
                jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title} {job.location ? `(${job.location})` : ""}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="career-apply__field">
            <label>Years Of Experience</label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option>0 - 1 Year</option>
              <option>2 - 4 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
        </div>

        {/* FILE */}
        <div className="career-apply__field">
          <label>Upload CV *</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            required
          />
        </div>

        {/* BUTTON */}
        <button type="submit" className="career-apply__btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </section>
  );
};

export default CareerApply;
