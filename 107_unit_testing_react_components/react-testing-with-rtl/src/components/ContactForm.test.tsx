/* 1. Static Rendering

- [ ] Renders form with the title "Contact Us"
- [ ] Contains inputs for:

  - Name
  - Email
  - Message
  - Subscribe to newsletter (checkbox)
  - Submit button

- [ ] All inputs have correct placeholders and labels
- [ ] Submit button is initially enabled
- [ ] No error messages are visible on initial render

 2. Validation Errors (Client-side)

- [ ] Shows "Name is required" when name is empty
- [ ] Shows "Email is required" when email is empty
- [ ] Shows "Email is invalid" for invalid email format
- [ ] Shows "Message is required" when message is empty
- [ ] Multiple validation errors can be displayed at once

 3. Successful Submission Behavior

- [ ] Displays success message: "Thank you for your message!"
- [ ] Hides the form after successful submission
- [ ] Submitting with checkbox checked still allows success

 4. Submission State

- [ ] Disables submit button while submitting
- [ ] Displays loading spinner while `isPending` is true

 5. Field Highlighting

- [x] Inputs with errors get the `input-error` or `textarea-error` class
- [x] Inputs without errors have default styling

### 6. Accessibility & Roles (Optional, Recommended)

- [ ] Inputs are accessible by their labels
- [ ] Submit button has appropriate role
- [ ] Error messages are visible to screen readers */

import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  describe('Initial Rendering', () =>{
    it('renders the form with the title "Contact Us"', () => {
      render(<ContactForm />);
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('contains inputs for name, email, message, and a submit button', () => {
      render(<ContactForm />);
      expect(screen.getByLabelText('Name *')).toBeInTheDocument();
      expect(screen.getByLabelText('Email *')).toBeInTheDocument();
      expect(screen.getByLabelText('Message *')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
    });

    it('all inputs have correct placeholders and labels', () => {
      render(<ContactForm />);
      expect(screen.getByLabelText('Name *')).toHaveAttribute('placeholder', 'Enter your name');
      expect(screen.getByLabelText('Email *')).toHaveAttribute('placeholder', 'Enter your email');
      expect(screen.getByLabelText('Message *')).toHaveAttribute('placeholder', 'Enter your message');
    });

    it('submit button is initially enabled', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button', { name: 'Send Message' })).toBeEnabled();
    });

    it('no error messages are visible on initial render', () => {
      render(<ContactForm />);
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Email is invalid')).not.toBeInTheDocument();
      expect(screen.queryByText('Message is required')).not.toBeInTheDocument();
    });
  })

  describe('Validation Errors',  () => {
    it('shows "Name is required" when name is empty', async () => {
      render(<ContactForm name="" email="test@example.com" message="Hello" />);
      const form = screen.getByTestId('contact-form');
      fireEvent.submit(form);
      expect(await screen.findByText('Name is required')).toBeInTheDocument();
    });

    it('shows "Email is required" when email is empty', async () => {
      render(<ContactForm name="Test" email="" message="Hello" />);
      const form = screen.getByTestId('contact-form');
      fireEvent.submit(form);
      expect(await screen.findByText('Email is required')).toBeInTheDocument();
    });

    it('shows "Email is invalid" for invalid email format',async() => {
      render(<ContactForm name="Test" email="invalid-email" message="Hello" />);
      const form = screen.getByTestId('contact-form');
      fireEvent.submit(form);
      expect(await screen.findByText('Email is invalid')).toBeInTheDocument();
    });

    it('shows "Message is required" when message is empty', async () => {
      render(<ContactForm name="Test" email="test@example.com" message="" />);
      const form = screen.getByTestId('contact-form');
      fireEvent.submit(form);
      expect( await screen.findByText('Message is required')).toBeInTheDocument();
    });

    it('multiple validation errors can be displayed at once', async () => {
      render(<ContactForm name="" email="" message="" />);
      const form = screen.getByTestId('contact-form');
      fireEvent.submit(form);
      expect(await screen.findAllByText(/ is required/)).toHaveLength(3);
    });

    describe('Successful Submission', () => {
      it('displays success message: "Thank you for your message!"', async () => {
        render(<ContactForm name="Test" email="test@example.com" message="Hello" />);
        const form = screen.getByTestId('contact-form');
        fireEvent.submit(form);
        expect(await screen.findByText('Thank you for your message!', {}, { timeout: 3000 })).toBeInTheDocument();
      })
    })
  })
})
