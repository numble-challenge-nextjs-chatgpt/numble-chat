import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import MainLogo from '../Common/Logo/MainLogo';
import KeyButton from '../Common/Key/KeyButton';

function Template() {
  return (
    <main className="flex flex-col items-center justify-between w-full h-full p-7">
      <section className="w-full h-full flex-[2] flex justify-center">
        <MainLogo />
      </section>
      <section className="w-full flex flex-col flex-[2] items-center first-of-type:self-start ">
        <Input title="API KEY" />
      </section>
      <section className="flex flex-col items-center justify-end flex-1 w-full h-full">
        <Button size="L" color="B">
          Login
        </Button>
        <KeyButton />
      </section>
    </main>
  );
}

export default Template;
