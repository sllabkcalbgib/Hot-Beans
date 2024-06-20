

document.addEventListener('DOMContentLoaded', function() {
  const jobList = document.getElementById('jobList');
  const jobDescription = document.getElementById('jobDescription');

  // Add click event listener to each job listing
  jobList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      // Get job title from clicked list item
      const jobTitle = event.target.textContent;
      
      // Set job description based on job title
      switch (jobTitle) {
        case 'Software Developer':
          jobDescription.textContent = 'We are looking for an experienced software developer to join our team.';
          break;
        case 'Marketing Specialist':
          jobDescription.textContent = 'We are hiring a marketing specialist to help promote our services.';
          break;
        case 'HR Manager':
          jobDescription.textContent = 'We have an opening for an HR manager to handle recruitment and employee relations.';
          break;
        default:
          jobDescription.textContent = 'Select a job to view details.';
      }
    }
  });
});
