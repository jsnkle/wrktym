function WorkStep({ worksteps }) {
  const content = worksteps.map((workstep, index) => (
    <div className="work-container" key={index}>
      <input
        type="checkbox"
        className="work-checkbox"
        checked={workstep.status}
        // todo: add onChange function with state
      />
      <span className="work-title">{workstep.title}</span>
    </div>
  ));

  return content;
}

export default WorkStep;
