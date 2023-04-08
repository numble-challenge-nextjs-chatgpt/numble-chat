import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import MainLogo from '../Common/Logo/MainLogo';
import KeyButton from '../Key/KeyButton';

function Template() {
  return (
    <main className="flex flex-col h-full w-full p-7 items-center justify-between">
      <section className="w-full h-full flex-[2] flex justify-center">
        <MainLogo />
      </section>
      <section className="w-full flex flex-col flex-[2] items-center first-of-type:self-start ">
        <Input title="API KEY" />
      </section>
      <section className="w-full h-full flex-1 flex flex-col items-center justify-end">
        <Button size="L" color="B">
          Login
        </Button>
        <KeyButton />
      </section>
    </main>
  );
}

export default Template;
