import Link from 'next/link';

export async function LeftNav() {
  return (
    <nav className="navbar">
      <div className="left-side">
        <ul className="dashboard-list">
          <li className="create ">
            <Link href="/" className="active">
              <img src="../imgs/add.svg" alt="" />
              <p>Create Stable Coin</p>
            </Link>
          </li>
          <li>
            <Link href="/">Operate Stable Coins</Link>
          </li>
          <li>
            <Link href="/">Role Management</Link>
          </li>
          <li>
            <Link href="/">Stable Coin Details</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
