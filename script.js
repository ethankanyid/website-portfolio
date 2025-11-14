// Typewriter effect
const text = "Hi, I'm Ethan Kanyid!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}

// Fetch and display your classwork GitHub repo info
async function fetchClassworkRepo() {
  const container = document.getElementById("classwork-repo");
  const repoUrl = "https://api.github.com/repos/ethankanyid/classwork";
  const commitsUrl =
    "https://api.github.com/repos/ethankanyid/classwork/commits";

  try {
    // Fetch repo info
    const repoResponse = await fetch(repoUrl);
    if (!repoResponse.ok) {
      container.innerHTML =
        "<li>Failed to load classwork repository info.</li>";
      return;
    }
    const repo = await repoResponse.json();

    // Fetch latest commits
    const commitsResponse = await fetch(commitsUrl);
    if (!commitsResponse.ok) {
      container.innerHTML = "<li>Failed to load commits.</li>";
      return;
    }
    const commits = await commitsResponse.json();

    // Get the most recent commit info
    const latestCommit = commits[0];
    const commitMessage = latestCommit.commit.message;
    const commitUrl = latestCommit.html_url;
    const commitDate = new Date(
      latestCommit.commit.author.date,
    ).toLocaleString();

    // Display info with last commit time
    container.innerHTML = `
      <strong>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
      </strong>
      — ${repo.description || "No description available."}<br><br>
      <ul>
        <li>Latest commit: <a href="${commitUrl}" target="_blank" rel="noopener noreferrer">${commitMessage}</a></li>
        <li>Commit time: ${commitDate}</li>
      </ul>
      <p><small><em>Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</em></small></p>
    `;
  } catch (error) {
    container.innerHTML = "<li>Error loading repository info.</li>";
    console.error(error);
  }
}

// Shrinking header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Run both on window load
window.onload = () => {
  typeWriter();
  fetchClassworkRepo();
};
