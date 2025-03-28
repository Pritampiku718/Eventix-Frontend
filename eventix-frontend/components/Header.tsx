'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Search, Calendar, User } from 'lucide-react';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f05537;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f8f8f8;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  width: 400px;

  input {
    border: none;
    background: none;
    margin-left: 0.5rem;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    text-decoration: none;
    color: #39364f;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #f05537;
    }
  }
`;

const CreateEventButton = styled.button`
  background-color: #f05537;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #d64426;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link href="/">Eventix</Link>
        </Logo>
        
        <SearchBar>
          <Search size={20} color="#666" />
          <input placeholder="Search events..." />
        </SearchBar>

        <NavLinks>
          <Link href="/browse">
            <Calendar size={20} />
            Browse Events
          </Link>
          <Link href="/account">
            <User size={20} />
            Sign In
          </Link>
          <CreateEventButton>Create Event</CreateEventButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}