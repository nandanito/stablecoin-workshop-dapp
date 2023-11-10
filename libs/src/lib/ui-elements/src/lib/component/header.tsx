import Link from 'next/link';
import Image from 'next/image';

export async function Header() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link href="/">
          <Image
            src="../imgs/settlemint-logo.svg"
            width={200}
            height={40}
            alt=""
          />
        </Link>
      </div>
      <div className="right-nav">
        <div className="nav-wallet">
          <button>
            <img src="../imgs/Group.svg" alt="" />
            <p>Connect Metamask Wallet</p>
          </button>
        </div>
        <div className="logout">
          <button>
            <img src="../imgs/logout.svg" alt="" />
            <p>LOGOUT</p>
          </button>
        </div>
      </div>
    </div>
  );
}
