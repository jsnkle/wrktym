import { WorkAccordion } from "@features/work";
import { WORK } from "@features/work/data.js";

function WorkStack() {
  return (
    <>
      <WorkAccordion activities={WORK} />
    </>
  );
}

export default WorkStack;
