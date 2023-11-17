'use client'
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
            <Link href="/role">Role Management</Link>
          </li>
          <li>
            <Link href="/stableCoin">Stable Coin Details</Link>
          </li>
        </ul>
    </div>
  );
}
