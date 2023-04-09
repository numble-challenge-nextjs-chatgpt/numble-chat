import Image from 'next/image';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import { modalPropsType } from './chatListType';

function ModifyModal({ setOpen }: modalPropsType) {
  return (
    <div className="w-full fixed max-w-md h-full flex p-7 z-10 flex-col items-center justify-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
      <div className="absolute w-full max-w-md inset-0 bg-modalBack/50" onClick={() => setOpen((prev) => !prev)} />
      <div className="z-20 w-full p-7 flex flex-col bg-modalBack space-y-4 rounded-unifyR ">
        <div className="text-white flex justify-end">
          <Image
            className="cursor-pointer"
            src={'/images/End.svg'}
            width={32.53}
            height={32.53}
            alt={'끄기'}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className="mt-0">
          <Input title="방 이름" />
        </div>
        <div>
          <Input title="방 이름" />
        </div>
        <div className="flex justify-end space-x-4">
          <Button color="R" size="S">
            삭제
          </Button>
          <Button color="B" size="S">
            수정
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModifyModal;
