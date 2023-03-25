import { WorkStep } from "@features/work";

function WorkAccordion({ activities }) {
  const accordion = activities.map((activity) => (
    <li key={activity.id}>
      <h1>
        {activity.title} - ({activity.flow})
      </h1>
      <WorkStep worksteps={activity.worksteps} />
    </li>
  ));

  return accordion;
}

export default WorkAccordion;
