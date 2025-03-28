'use client';

import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const FooterContainer = styled.footer`
  background-color: #1e0a3c;
  color: #fff;
  padding: 4rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.75rem;

      a {
        color: #fff;
        text-decoration: none;
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>Use Eventix</h3>
            <ul>
              <li><a href="/create">Create Events</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/features">Features</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Plan Events</h3>
            <ul>
              <li><a href="/conferences">Conferences</a></li>
              <li><a href="/fundraisers">Fundraisers</a></li>
              <li><a href="/venues">Venues</a></li>
              <li><a href="/virtual">Virtual Events</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Connect With Us</h3>
            <ul>
              <li><a href="/contact">Contact Support</a></li>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Follow Us</h3>
            <SocialLinks>
              <a href="https://facebook.com"><Facebook /></a>
              <a href="https://twitter.com"><Twitter /></a>
              <a href="https://instagram.com"><Instagram /></a>
              <a href="https://youtube.com"><Youtube /></a>
            </SocialLinks>
          </FooterSection>
        </FooterGrid>

        <BottomBar>
          <div>© 2025 Eventix. All rights reserved.</div>
          <div>
            <a href="/terms">Terms</a> • <a href="/privacy">Privacy</a> • <a href="/cookies">Cookies</a>
          </div>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
}