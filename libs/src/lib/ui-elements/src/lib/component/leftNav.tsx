import Link from 'next/link';

export async function LeftNav() {
  return (
    <div className="left-nav">
        <ul className="nav-list">
          <li className="create">
            <Link href="/" className="active">
              <span className="plus-icon">+</span> Create Stable Coin
            </Link>
          </li>
          <li>
            <Link href="/operate">Operate Stable Coins</Link>
          </li>
          <li>
            <Link href="/">Role Management</Link>
          </li>
          <li>
            <Link href="/">Stable Coin Details</Link>
          </li>
        </ul>
    </div>
  );
}
