interface TaskProps {
  children: React.ReactNode;
}

const Task = ({ children }: TaskProps) => {
  return (
    <section className="bg-gray-100 text-gray-800 p-4 my-4">
      <div className="text-xl font-bold underline">Task:</div>
      <ul className="list-disc pl-4">{children}</ul>
    </section>
  );
};

export default Task;
