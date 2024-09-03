import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header_2 have_center header_is_sticky smart_sticky cz_menu_fx_zoom_in w-full">
      <div className="row elms_row">
        <div className="clr">
          {/* Left Section */}
          <div className="elms_left header_2_left">
            <div className="cz_elm logo_header_2_left_0 inner_logo_header_2_left_0">
              <div className="logo_is_img logo">
                <a href="https://xtratheme.com/elementor/business-4/" title="Business and Corporate WordPress Theme">
                  <img
                    src="https://xtratheme.com/elementor/business-4/wp-content/uploads/sites/37/2021/01/logo-biz.png"
                    alt="Business 4 WordPress Theme"
                    width="190"
                    height="105"
                    className="lazyDone"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Center Section */}
          <div className="elms_center header_2_center">
            <div className="cz_elm menu_header_2_center_1 inner_menu_header_2_center_0 my-6">
              <i className="fa fa-bars hide icon_mobile_cz_menu_default cz_mi_81889" aria-label="Menu"><span></span></i>
              <ul id="menu_header_2" className="sf-menu clr cz_menu_default sf-js-enabled sf-arrows">
                <li className="menu-item current-menu-item cz current_menu">
                  <a href="https://xtratheme.com/elementor/business-4/" data-title="Home"><span>Home</span></a>
                </li>
                <li className="menu-item cz">
                  <a href="https://xtratheme.com/elementor/business-4/about/" data-title="About"><span>About</span></a>
                </li>
                <li className="menu-item cz">
                  <a href="https://xtratheme.com/elementor/business-4/services/" data-title="Services"><span>Services</span></a>
                </li>
                <li className="menu-item cz">
                  <a href="https://xtratheme.com/elementor/business-4/blog/" data-title="Blog"><span>Blog</span></a>
                </li>
                <li className="menu-item cz">
                  <a href="https://xtratheme.com/elementor/business-4/contact/" data-title="Contact"><span>Contact</span></a>
                </li>
              </ul>
              <i className="fa czico-198-cancel cz_close_popup xtra-close-icon hide" aria-label="Close"></i>
            </div>
          </div>
          {/* Right Section */}
          <div className="elms_right header_2_right">
            <div className="cz_elm button_header_2_right_2 inner_button_header_2_right_0 my-2 mr-1">
              <a className="cz_header_button cz_btn_67168" href="https://xtratheme.com/elementor/business-4/contact/">
                <span>Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Optional Secondary Header */}
      <div className="header_4 smart_sticky">
        <div className="row elms_row">
          <div className="clr">
            <div className="elms_left header_4_left my-2">
              <div className="logo_is_img logo">
                <a href="https://xtratheme.com/elementor/business-4/" title="Business and Corporate WordPress Theme">
                  <img
                    src="https://xtratheme.com/elementor/business-4/wp-content/uploads/sites/37/2021/01/logo-biz.png"
                    alt="Business 4 WordPress Theme"
                    width="126"
                    height="70"
                    className="lazyDone"
                  />
                </a>
              </div>
            </div>
            <div className="elms_right header_4_right">
              <div className="cz_elm menu_header_4_right_4 inner_menu_header_4_right_0 my-2.5">
                <i className="fa fa-bars icon_offcanvas_menu inview_right cz_mi_53048 text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-full" aria-label="Menu"><span></span></i>
                <ul id="menu_header_4" className="sf-menu clr offcanvas_menu inview_right sf-js-enabled sf-arrows">
                  <li className="menu-item current-menu-item cz current_menu">
                    <a href="https://xtratheme.com/elementor/business-4/" data-title="Home"><span>Home</span></a>
                  </li>
                  <li className="menu-item cz">
                    <a href="https://xtratheme.com/elementor/business-4/about/" data-title="About"><span>About</span></a>
                  </li>
                  <li className="menu-item cz">
                    <a href="https://xtratheme.com/elementor/business-4/services/" data-title="Services"><span>Services</span></a>
                  </li>
                  <li className="menu-item cz">
                    <a href="https://xtratheme.com/elementor/business-4/blog/" data-title="Blog"><span>Blog</span></a>
                  </li>
                  <li className="menu-item cz">
                    <a href="https://xtratheme.com/elementor/business-4/contact/" data-title="Contact"><span>Contact</span></a>
                  </li>
                </ul>
                <i className="fa czico-198-cancel cz_close_popup xtra-close-icon hide" aria-label="Close"></i>
              </div>
            </div>
            <div className="cz_elm icon_header_4_right_5 inner_icon_header_4_right_1 mx-2.5">
              <a className="elm_icon_text" href="tel:001112344534">
                <i className="fas fa-mobile-screen text-white bg-gradient-to-r from-green-500 to-teal-500 p-2.5 rounded-full" aria-hidden="true"></i>
                <span className="it_text" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
