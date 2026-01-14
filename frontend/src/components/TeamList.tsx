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

  // TeamMember data
  const [team, setTeam] = useState<TeamMember[]>([]);

  // Collect TeamMembers
  useEffect(() => {
    async function loadTM() { // loading team members 
      const response = await fetchTeamMembers();

      if (response.success && response.data) {
        setTeam(response.data);
      }
    }

    loadTM(); // call function
  }, []);

  return (
    <div>
      <h1> TEAM MEMBERS </h1>
      <ul>
        {team.map((member) => (
          <li key={member.id}>
            <strong>{member.name}</strong><br />
            Role: {member.role}<br />
            Department: {member.department}<br />
            Email: {member.email}
          </li>
        ))}
      </ul>



      {/* Hint: You might want sections for:
          - Filter controls (search input, department dropdown)
          - Loading state
          - Error state  
          - Team member list/grid
      */}
    </div>
  );
}
