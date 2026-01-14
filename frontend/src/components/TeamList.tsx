/**
 * TeamList Component
 * 
 * Your task: Build this component to display team members from the API.
 * 
 * Requirements:
 *   1. Fetch team members from GET http://localhost:3001/team
 *   2. Display each team member (name, role, department, email)
 *   3. Show a loading state while fetching
 *   4. Show an error state if the request fails
 *   5. Add a text input to filter by name
 *   6. Add a dropdown to filter by department
 * 
 * Helpful files:
 *   - src/types/team.ts - TypeScript types for the API response
 *   - src/api/team.ts - API helper function (optional to use)
 * 
 * Feel free to create additional components if you'd like!
 */

// Adding imports from react and other helper functions
import { useEffect, useState } from "react";
import { fetchTeamMembers } from "../api/team";
import { TeamMember, DEPARTMENTS, Department } from "../types/team";

export function TeamList() {
  // TODO: Implement this component

  // Task 1
  const [team, setTeam] = useState<TeamMember[]>([]); // TeamMember Data
  const [loading, setLoading] = useState(true); // Loading until false
  const [alarm, setAlarm] = useState<string | null>(null); // Error loading

  // Task 2
  const [nameFilter, setNameFilter] = useState<string>("");
  

  // Collect TeamMembers
  useEffect(() => {
    async function loadTM() { // loading team members 
      setLoading(true);
      setAlarm(null); // reset error before fetching

      try {
        const response = await fetchTeamMembers();

        // wait 1 second of loading time (developement purposes)
        setTimeout(() => {
          if (response.success && response.data) {
          setTeam(response.data);
          } else {
            setAlarm(response.error || "Failed to load team members.");
          }
          setLoading(false); // done loading
        }, 1000); // 1s
      } catch (err) {
        setAlarm("Failed to fetch team members.");
        setLoading(false);
      }
    }

    loadTM(); // call function
  }, []);

  return (
    <div>
      <h1>TEAM MEMBERS</h1>

    <input
      type="text"
      placeholder="Search..."
      value={nameFilter}
      onChange={(x) => setNameFilter(x.target.value)}
    />

      {loading ? (
        <p>Loading...</p>
      ) : alarm ? (
        <p>{alarm}</p>
      ) : (
        <ul>
          {team
          .filter((member) =>
            member.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
          )
          .sort((a, b) =>
            a.name.localeCompare(b.name)
          )
          .map((member) => (
            <li key={member.id}>
              <strong>{member.name}</strong><br />
              Role: {member.role}<br />
              Department: {member.department}<br />
              Email: {member.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}
