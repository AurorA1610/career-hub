const getStoredJobApplications = () => {
  const storedJobApplications = localStorage.getItem("job-applications");
  if (storedJobApplications) {
    return JSON.parse(storedJobApplications);
  }
  return [];
};
const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplications();
  const isExisting = storedJobApplications.find((jobId) => jobId === id);
  if (!isExisting) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};
export { getStoredJobApplications, saveJobApplication };
