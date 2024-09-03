const jobs = [
  {
    title: "Sales And Admission Executive",
    company: "SpeedJet Aviation Academy",
    location: "Mumbai",
    experience: "1-3 years",
    salary: "2.5 - 3 LPA",
    posted: "2 weeks ago",
  },
  {
    title: "Executive - Sales & CS",
    company: "Abovo Hospitality & Events",
    location: "Delhi",
    experience: "0-2 years",
    salary: "2.4 - 3 LPA",
    posted: "4 days ago",
  },
  {
    title: "Senior Social Media Marketing Associate",
    company: "Sarvam Foundation",
    location: "Delhi, Gurgaon",
    experience: "0-1 years",
    salary: "2 - 2.5 LPA",
    posted: "5 days ago",
  },
  // Add more jobs as needed
];

function filterJobs() {
  const profile = document.getElementById("profile").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();
  const workFromHome = document.getElementById("work-from-home").checked;
  const partTime = document.getElementById("part-time").checked;
  const salary = document.getElementById("salary").value;
  const experience = document.getElementById("experience").value;

  const filteredJobs = jobs.filter((job) => {
    return (
      (!profile || job.title.toLowerCase().includes(profile)) &&
      (!location || job.location.toLowerCase().includes(location)) &&
      (!workFromHome || job.title.toLowerCase().includes("remote")) && // Example logic
      (!partTime || job.title.toLowerCase().includes("part-time")) && // Example logic
      (!experience || job.experience.includes(experience))
    );
  });

  displayJobs(filteredJobs);
}

function displayJobs(jobs) {
  const jobListings = document.getElementById("job-listings");
  jobListings.innerHTML = "";
  jobs.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("job-listing");
    jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <p>${job.experience}</p>
            <p>${job.salary}</p>
            <p>${job.posted}</p>
        `;
    jobListings.appendChild(jobElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayJobs(jobs); // Display all jobs initially
});
