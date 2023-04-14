import Image from 'next/image';
import SubLogo from '../Common/Logo/SubLogo';
import { chatListHaederType } from './chatListType';

function Header({ createOpen }: chatListHaederType) {
  return (
    <header className="flex justify-between items-center">
      <SubLogo />
      <Image
        className="cursor-pointer"
        src={'/images/Append.svg'}
        width={26.5}
        height={26.5}
        alt={'채팅방생성'}
        onClick={() => createOpen((prev) => !prev)}
      />
    </header>
  );
}

export default Header;
