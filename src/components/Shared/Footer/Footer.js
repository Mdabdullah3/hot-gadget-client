import React from "react";

const Footer = () => {
  return (
    <footer class="md:px-20 footer p-10 bg-gradient-to-r from-[#156355] to-[#00C2B4] font-mono text-base-content mt-40">
      <div>
        <span class="footer-title text-xl text-black">Services</span>
        <h1 class="link link-hover">Branding</h1>
        <h1 class="link link-hover">Design</h1>
        <h1 class="link link-hover">Marketing</h1>
        <h1 class="link link-hover">Advertisement</h1>
      </div>
      <div>
        <span class="footer-title text-xl text-black">Company</span>
        <h1 class="link link-hover">About us</h1>
        <h1 class="link link-hover">Contact</h1>
        <h1 class="link link-hover">Jobs</h1>
        <h1 class="link link-hover">Press kit</h1>
      </div>
      <div>
        <span class="footer-title text-xl text-black">Legal</span>
        <h1 class="link link-hover">Terms of use</h1>
        <h1 class="link link-hover">Privacy policy</h1>
        <h1 class="link link-hover">Cookie policy</h1>
      </div>
      <div>
        <span class="footer-title text-xl text-black">Newsletter</span>
        <div class="form-control w-10/12">
          <label class="label">
            <span class="label-text text-white font-semibold">
              Enter your email address
            </span>
          </label>
          <div class="relative md:block">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16"
            />
            <button class="btn btn-primary  absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
