# Security Policy

## Supported Versions

We actively support the latest version of the ICPC Caribbean 2025 website. Security updates will be applied to the main branch and deployed as needed.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

We take the security of the ICPC Caribbean 2025 website seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by:

1. Opening a [Security Advisory](https://github.com/ragnarok22/icpc-caribbean-2025/security/advisories/new) on GitHub
2. Or sending an email to the repository maintainer

Please include the following information in your report:

- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

- We will acknowledge your report within 48 hours
- We will provide a more detailed response within 5 business days
- We will work on a fix and keep you informed of the progress
- Once the vulnerability is fixed, we will publicly disclose the issue (crediting you if you wish)

## Security Best Practices

When contributing to this project, please follow these security best practices:

### Code Security

- Never commit sensitive information (API keys, passwords, tokens) to the repository
- Use environment variables for configuration
- Validate and sanitize all user inputs
- Keep dependencies up to date
- Follow the principle of least privilege

### Dependencies

- Regularly update dependencies to patch known vulnerabilities
- Review security advisories from GitHub Dependabot
- Use `pnpm audit` to check for known vulnerabilities in dependencies
- Only use well-maintained and trusted packages

### Web Security

- Implement proper Content Security Policy (CSP)
- Use HTTPS for all connections
- Validate all external data sources
- Protect against common web vulnerabilities (XSS, CSRF, etc.)
- Follow OWASP security guidelines

## Security Updates

Security updates will be released as soon as possible after a vulnerability is confirmed and fixed. Users should:

- Watch the repository for security announcements
- Subscribe to GitHub Security Advisories
- Keep their deployments up to date with the latest releases

## Responsible Disclosure

We ask that security researchers:

- Give us reasonable time to respond and fix the issue before public disclosure
- Make a good faith effort to avoid privacy violations, data destruction, or service interruption
- Do not exploit the vulnerability beyond what is necessary to demonstrate the issue
- Only interact with accounts you own or with explicit permission from the account holder

## Recognition

We appreciate the security research community's efforts to improve the security of our project. Security researchers who report valid vulnerabilities will be acknowledged in our security advisories (if they wish) and in our project documentation.

## Questions

If you have questions about this security policy, please open an issue or contact the maintainers.

---

Thank you for helping keep ICPC Caribbean 2025 and our users safe!
