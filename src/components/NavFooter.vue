<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__secondary">
        <div class="footer__inner">
          <div class="footer__region">
            <span>Region</span>
            <select class="footer__region__select">
              <option value="en-US">USA</option>
              <option value="zh-CN">China</option>
            </select>
          </div>
          <div class="footer__secondary__nav">
            <span>Copyright © 2017 IMooc All Rights Reserved.</span>
            <a href="#">
              About Us
            </a>
            <a href="#">
              Terms &amp; Conditions
            </a>
            <a href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="">
.footer {
  background-color: #f5f7fc;
  color: #333;
  position: relative;
}

.footer__wrap {
  max-width: 1280px;
  margin: 0 auto;
}

.footer__secondary {
  border-top: 1px solid rgba(51, 51, 51, 0.15);
}

.footer__secondary .footer__inner {
  height: 100px;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}

.footer__region {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%); 
  left: 36px;
}

.footer__region span {
  color: #ada9a5;
}

.footer__secondary__nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0px;
}

.footer__secondary__nav a,
.footer__secondary__nav span {
  color: #ada9a5;
  margin-left: 3.3125em;
}

.footer__secondary__nav a:first-child,
.footer__secondary__nav span:first-child {
  margin-left: 0;
}
/* 当页面小于1440px的时候执行它下面的CSS */
@media screen and (max-width: 1440px) {
  .footer__nav a {
    margin-left: 2em;
  }

  .footer__secondary__nav a,
  .footer__secondary__nav span {
    margin-left: 1.5em;
  }
}

@media screen and (max-width: 991px) {
  .footer__nav a {
    font-size: 12px;
  }

  .footer__secondary__nav a,
  .footer__secondary__nav span {
    font-size: 12px;
  }
}

@media screen and (max-width: 767px) {
  .footer__primary .footer__inner {
    padding-top: 80px;
    padding-bottom: 80px;
    height: auto;
    text-align: center;
  }

  .footer__secondary .footer__inner {
    padding: 15px 0 20px;
    height: auto;
    text-align: center;
  }

  .footer__logo {
    position: static;
    top: 0;
    left: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    height: 42.73px;
    width: 164px;
    display: inline-block;
  }

  .footer__nav {
    position: static;
    top: 0;
    left: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    display: block;
    margin-top: 70px;
  }

  .footer__nav a {
    margin-top: 23px;
    margin-left: 0;
    display: block;
  }

  .footer__nav a:first-of-type {
    margin-top: 0;
  }

  .footer__region {
    position: static;
    top: 0;
    left: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }

  .footer__secondary__nav {
    position: static;
    top: 0;
    left: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    margin-top: 50px;
  }

  .footer__secondary__nav span,
  .footer__secondary__nav a {
    display: block;
    margin-left: 0;
  }

  .footer__secondary__nav a {
    margin-top: 1.6363636364em;
  }
}
</style>
