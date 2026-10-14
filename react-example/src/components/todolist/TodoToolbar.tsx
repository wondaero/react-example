import Button from "../Button";
import Input from "../Input";

function TodoToolbar() {
  return (
    <section className="flex items-center gap-2 justify-center">
      <Input type="text" label="안녕" labelPosition="top" />
      <Button>조회</Button>
      <Button>추가</Button>
    </section>
  );
}

export default TodoToolbar;
