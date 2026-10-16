import Button from "../Button";
import Input from "../Input";

function TodoAddForm() {
  return (
    <section className="flex items-center gap-2 justify-center">
      <Input type="text" labelPosition="top" />
      <Button>추가</Button>
    </section>
  );
}

export default TodoAddForm;
