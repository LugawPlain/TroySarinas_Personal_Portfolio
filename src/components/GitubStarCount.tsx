import { useEffect, useState } from "react";

interface GitHubStarCountProps {
  username: string;
  repo: string;
}

interface GitHubRepoData {
  stargazers_count: number;
  message?: string; // Add message for potential API errors (like 'Not Found')
}

const GitHubStarCount: React.FC<GitHubStarCountProps> = ({
  username,
  repo,
}) => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null); // State for error message

  useEffect(() => {
    setStarCount(null); // Reset states on prop change
    setError(null);

    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((response) => {
        if (!response.ok) {
          // Throw an error if response is not OK (e.g., 404 Not Found)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json() as Promise<GitHubRepoData>;
      })
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStarCount(data.stargazers_count);
        } else {
          // Handle cases where stargazers_count might be missing or not a number
          throw new Error("Invalid data format received");
        }
      })
      .catch((error) => {
        console.error("Error fetching star count:", error);
        // Set a user-friendly error message
        setError("Could not fetch stars");
      });
  }, [username, repo]);

  return (
    <div>
      {/* {error ? (
        <p style={{ color: "red" }}>{error}</p> // Display error message
      ) : starCount !== null ? (
        <p>Stars: {starCount}</p> // Display star count on success
      ) : (
        <p>Loading stars...</p> // Display loading message
      )} */}
    </div>
  );
};

export default GitHubStarCount;
