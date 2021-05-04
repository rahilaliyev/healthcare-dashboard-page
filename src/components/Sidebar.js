import React from "react";
import Logo from "../assets/logo.png";
import LittleLogo from "../assets/logo-image.png";
import "../styles/Sidebar.scss";
import { changePage } from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const hideSidebar = () => {
    document.querySelector(".Sidebar").classList.remove("active");
  };
  const dispatch = useDispatch();
  const keylist = useSelector((state) => state.changePageReducer);
  const changeClickList = (key) => {
    dispatch(changePage(key));
  };
  const SidebarLists = [
    {
      image: (key) => (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.2192 1.20646C2.7856 1.20646 0 3.99046 0 7.42566C0 10.8609 2.784 13.6465 6.2192 13.6465C9.6544 13.6465 12.4384 10.8625 12.4384 7.42566H6.2192V1.20646V1.20646ZM14 6.71366C14 4.99686 13.304 3.44166 12.1792 2.31686L7.7808 6.71366H14ZM7.0064 0.350464V6.56806L11.4032 2.17126C10.1888 0.956864 8.5968 0.350464 7.0064 0.350464V0.350464Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),

      list: "Dashboard",
    },
    {
      image: (key) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6465 6.79995C15.0801 6.35355 14.0225 6.73435 13.1985 7.64955C12.4289 7.43515 11.7457 7.48795 11.1633 7.81595C10.0481 8.44475 9.62567 9.89115 9.46887 10.9903C9.44487 11.1599 9.42247 11.3327 9.39847 11.5055C9.14887 13.4079 8.91207 15.2063 6.65607 15.2063C6.61927 15.2063 6.58247 15.2063 6.54407 15.2047C5.90407 15.1887 5.44327 14.9903 5.13607 14.5967C4.56967 13.8703 4.66727 12.6831 4.73927 12.1903C4.96327 12.0895 5.12167 11.8687 5.12967 11.6079L5.16327 10.6335L6.35847 10.2783C6.50727 10.2335 6.62247 10.1391 6.70567 10.0223C6.92007 10.0703 7.18727 10.0591 7.37607 9.94075C7.70727 9.73435 8.19047 9.33755 8.79207 8.58715C9.44967 7.76635 9.61127 7.10555 9.62727 6.67675C9.63527 6.37115 9.42247 6.06075 9.26407 5.97435C9.10567 5.88795 9.07687 6.04955 9.10727 6.35355C9.15207 6.81115 9.08007 7.50715 8.48967 8.26395C8.47847 8.27675 8.46887 8.28635 8.45927 8.29915L8.46407 8.26555C8.60487 8.04795 8.72647 7.81915 8.81927 7.57435C9.77927 5.03195 7.70407 2.06555 7.61447 1.94075C7.59527 1.91355 7.56967 1.89595 7.54407 1.87515C7.60327 1.73915 7.58887 1.61595 7.48967 1.55195C7.33447 1.45115 7.09127 1.14875 6.95047 0.876747L6.70087 0.399947C6.56167 0.129547 6.26727 0.0815474 6.04647 0.292747L5.42727 0.894347C5.20487 1.10555 5.24807 1.39195 5.51847 1.53435L5.95527 1.75835C6.22567 1.90075 6.52167 2.15675 6.61767 2.33115C6.68967 2.46075 6.85607 2.47995 7.02727 2.39195C7.20327 2.64795 8.91207 5.24155 8.12807 7.31675C8.09607 7.40155 8.04647 7.47995 8.00487 7.56155L8.00007 7.56315C7.95207 7.55195 7.90567 7.53435 7.85607 7.53435C7.73287 7.53435 7.61767 7.57115 7.52167 7.63195L7.66727 7.77115C7.57927 7.87835 7.52007 8.00955 7.52007 8.15835C7.52007 8.19515 7.52807 8.23035 7.53447 8.26555C7.25927 8.56635 6.91527 8.83515 6.49927 9.06395C6.34567 8.97755 6.16007 8.95035 5.97927 9.00475L4.52327 9.43675L2.96487 8.94395C2.78727 8.88795 2.60167 8.91195 2.44967 8.99515C1.70727 8.55515 1.20167 7.99355 0.944073 7.31675C0.123273 5.14235 2.04167 2.39675 2.06087 2.36955C2.06247 2.36475 2.06247 2.35995 2.06727 2.35515C2.06727 2.35515 2.11207 2.39835 2.16807 2.44795C2.22407 2.50075 2.34567 2.40155 2.44167 2.22715C2.53607 2.05115 2.83527 1.79515 3.10567 1.65435L3.54087 1.42875C3.81287 1.28795 3.85447 1.00155 3.63367 0.788747L3.01287 0.188747C2.79207 -0.0240526 2.50087 0.0239474 2.35847 0.295947L2.11047 0.772747C1.96807 1.04475 1.72647 1.34555 1.57127 1.44795C1.41287 1.54715 1.34407 1.68315 1.41287 1.74715L1.53927 1.86555C1.50887 1.88635 1.48167 1.90875 1.45767 1.94075C1.36807 2.06555 -0.707126 5.03195 0.252873 7.57435C0.576073 8.42555 1.19687 9.11835 2.10567 9.64635C2.12967 9.90075 2.30407 10.1279 2.56327 10.2111L3.83527 10.6127L3.80167 11.5615C3.79687 11.7583 3.87847 11.9375 4.00967 12.0655C3.92167 12.6527 3.80487 14.0895 4.55207 15.0479C4.99847 15.6207 5.66247 15.9215 6.52647 15.9423C6.57287 15.9455 6.61767 15.9455 6.66247 15.9455C9.56007 15.9455 9.87687 13.5407 10.1313 11.6031C10.1537 11.4335 10.1761 11.2639 10.2001 11.0959C10.3889 9.77275 10.8593 8.83675 11.5265 8.46075C11.8609 8.27035 12.2625 8.21755 12.7201 8.29755C12.1457 9.24635 12.0737 10.2367 12.5969 10.6527C13.2033 11.1327 14.3777 10.6591 15.2193 9.59515C16.0609 8.53115 16.2513 7.27995 15.6465 6.79995ZM8.35367 8.42555C8.30407 8.48475 8.25447 8.54875 8.20647 8.60315C8.25447 8.54235 8.30247 8.48155 8.34727 8.41915L8.35367 8.42555ZM14.1377 8.71515C13.8225 9.11515 13.3825 9.29275 13.1553 9.11195C12.9889 8.98075 12.9841 8.69435 13.1153 8.39355C13.2353 8.43195 13.3569 8.47355 13.4817 8.52635C13.6721 8.60635 13.8865 8.51995 13.9665 8.33115C14.0465 8.14395 13.9585 7.92635 13.7697 7.84635C13.7137 7.82235 13.6609 7.80475 13.6049 7.78555C13.8625 7.59675 14.1329 7.53915 14.2945 7.66875C14.5233 7.84955 14.4513 8.31835 14.1377 8.71515Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),

      list: "Appointments",
    },
    {
      image: (key) => (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2683 15.2881C13.2043 14.6753 13.1883 14.0577 13.1275 13.4433C13.0363 12.5233 12.9051 11.6081 12.6331 10.7201C12.4859 10.2449 12.2619 9.83208 11.8155 9.56968C11.3883 9.31848 10.9227 9.16968 10.4555 9.02408C10.2923 8.97288 10.3211 9.08808 10.3307 9.17128C10.3739 9.57288 10.3371 9.96968 10.2539 10.3617C10.2267 10.4881 10.2699 10.5457 10.3787 10.6081C10.8395 10.8657 11.1019 11.2593 11.1307 11.7921C11.1595 12.3409 11.0475 12.8801 11.0139 13.4241C10.9915 13.7937 10.9515 14.1649 10.7963 14.5089C10.6091 14.9249 10.2859 15.0897 9.8443 15.0049C9.6763 14.9729 9.5659 14.8961 9.5931 14.7105C9.6203 14.5281 9.7467 14.4641 9.9147 14.4977C10.1259 14.5393 10.2491 14.4401 10.3355 14.2673C10.3947 14.1473 10.4267 14.0161 10.4395 13.8833C10.5019 13.2705 10.5691 12.6577 10.6187 12.0433C10.6635 11.4881 10.3659 11.0673 9.8731 10.9553C9.3643 10.8401 8.9259 11.0705 8.7163 11.5889C8.5483 12.0033 8.4107 12.4305 8.2507 12.8497C8.1595 13.0865 8.0811 13.3249 8.0331 13.5729C7.9707 13.8945 8.0347 14.0129 8.3323 14.1473C8.4747 14.2113 8.5435 14.3121 8.4939 14.4641C8.4443 14.6177 8.3323 14.6609 8.1787 14.6321C7.7403 14.5489 7.4859 14.2369 7.4939 13.7873C7.4971 13.6033 7.5243 13.4257 7.5755 13.2497C7.7643 12.5969 8.0123 11.9649 8.2651 11.3345C8.4923 10.7681 8.9451 10.4561 9.5611 10.4129C9.6811 10.4033 9.7323 10.3697 9.7547 10.2529C9.8299 9.86408 9.8411 9.47528 9.8059 9.08168C9.7899 8.89608 9.7179 8.79528 9.5243 8.76488C9.3675 8.74088 9.2107 8.68808 9.0635 8.62728C8.9163 8.56808 8.8523 8.58568 8.8011 8.75208C8.6203 9.35688 8.3675 9.93448 8.0747 10.4945C7.9339 10.7649 7.7707 11.0241 7.5899 11.3377C7.5179 10.9409 7.4635 10.6033 7.3931 10.2673C7.3611 10.1169 7.3643 9.98088 7.4299 9.83848C7.4667 9.75688 7.5643 9.66088 7.4667 9.57288C7.3115 9.43208 7.1419 9.30888 6.9771 9.17928C6.9723 9.17448 6.9499 9.18568 6.9403 9.19368C6.7803 9.33128 6.5979 9.44968 6.4731 9.61288C6.3979 9.71048 6.5435 9.83848 6.5755 9.95688C6.5819 9.98408 6.5963 10.0129 6.5931 10.0385C6.5259 10.4513 6.4555 10.8625 6.3803 11.3137C6.3275 11.2513 6.3035 11.2273 6.2875 11.2001C5.8651 10.5185 5.5211 9.80168 5.2603 9.04328C5.2075 8.88808 5.2123 8.64808 5.0795 8.59848C4.9547 8.55208 4.7675 8.67528 4.6075 8.72008C4.5243 8.74408 4.4507 8.76648 4.4187 8.86408C4.3579 9.05288 4.2715 9.23208 4.2267 9.42088C3.9323 10.6497 4.0059 11.8657 4.3851 13.0673C4.4427 13.2497 4.5115 13.3489 4.7195 13.3889C5.1211 13.4689 5.3371 13.9089 5.1995 14.2897C5.0555 14.6913 4.6219 14.8801 4.2443 14.7073C3.8635 14.5345 3.7003 14.0657 3.9211 13.7169C4.0011 13.5905 3.9915 13.4929 3.9483 13.3681C3.5419 12.2017 3.4331 11.0081 3.6203 9.78568C3.6635 9.50408 3.7579 9.23528 3.8219 8.93768C3.2635 9.10088 2.7275 9.23688 2.2443 9.51848C1.8891 9.72488 1.6139 9.99528 1.4587 10.3889C1.2731 10.8609 1.1611 11.3505 1.0667 11.8465C0.849102 12.9985 0.781902 14.1681 0.693902 15.3345C0.669902 15.6529 0.812302 15.8497 1.0651 15.9985H12.8875C13.1883 15.8561 13.3035 15.6289 13.2683 15.2881ZM4.3275 5.44808C4.4363 5.47688 4.4875 5.52968 4.5291 5.62888C4.7739 6.21448 5.0763 6.76488 5.5259 7.22248C5.8811 7.58568 6.2923 7.85768 6.8139 7.91048C7.4699 7.97768 7.9819 7.68488 8.4251 7.24168C8.8763 6.78888 9.1899 6.24488 9.4347 5.65608C9.4683 5.57608 9.4795 5.47528 9.6011 5.46408C10.0379 5.42248 10.3787 4.73128 10.3067 4.31048C10.2859 4.19048 10.2411 4.08008 10.1099 4.07208C9.9467 4.06088 9.9771 3.97448 10.0011 3.87368C10.0875 3.51208 10.1243 3.14248 10.1419 2.82568C10.1531 2.50408 10.1227 2.23688 10.0587 1.98088C9.9611 1.59368 9.7611 1.26088 9.3979 1.07528C9.1835 0.964882 9.0187 0.843282 8.9467 0.604882C8.9195 0.512082 8.8283 0.451282 8.7531 0.388882C8.4747 0.158482 8.1451 0.0576819 7.8027 0.0240819C6.7771 -0.0767181 5.8203 0.142482 4.9739 0.739282C4.3899 1.14888 3.9883 1.68968 3.9067 2.42568C3.8523 2.91048 3.8795 3.39048 3.9707 3.86888C3.9899 3.97128 4.0315 4.07848 3.8507 4.07528C3.7691 4.07368 3.7163 4.14248 3.6891 4.22248C3.5387 4.65128 3.8859 5.33128 4.3275 5.44808Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),
      list: "Doctors",
    },
    {
      image: (key) => (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.21126 4.46234C4.31846 4.68154 4.43366 4.87354 4.47846 5.10234C4.60326 5.73754 4.88966 6.30874 5.31846 6.78074C5.59046 7.07994 5.57446 7.38714 5.48166 7.69594C5.40166 7.96314 5.42566 8.15834 5.60326 8.36314C5.84006 8.63834 6.07686 8.91194 6.40486 9.08634C6.78406 9.28954 7.31526 9.25434 7.74406 8.91994C8.09446 8.64634 8.35686 8.29594 8.60006 7.92794C8.64326 7.86394 8.62566 7.80794 8.61286 7.74714C8.59686 7.67194 8.58246 7.59674 8.56646 7.52314C8.50086 7.22074 8.59046 6.98074 8.79686 6.74394C9.20966 6.26874 9.48486 5.71514 9.61286 5.09594C9.65926 4.87194 9.77766 4.68634 9.90246 4.48794C9.89926 4.56474 9.90246 4.64314 9.89126 4.71994C9.77286 5.51034 9.86246 6.29114 10.0033 7.06554C10.0625 7.38394 10.1665 7.69754 10.2945 7.99994C10.3697 8.17594 10.5489 8.17274 10.6865 8.22874C11.1841 8.42714 11.6673 8.65114 12.1249 8.93274C12.5393 9.18714 12.7489 9.57434 12.8961 10.0111C13.1265 10.6927 13.3281 11.3823 13.4657 12.0911C13.6161 12.8687 13.6753 13.6495 13.6305 14.4399C13.6097 14.7855 13.3921 14.9919 13.1025 15.1007C12.4161 15.3583 11.7089 15.5583 10.9889 15.7055C10.5649 15.7919 10.1393 15.8575 9.71686 15.9391C9.39686 16.0015 9.08326 15.9935 8.76486 15.9951C7.92646 16.0015 7.08646 15.9839 6.24806 16.0015C5.44166 16.0175 4.64966 15.9327 3.85606 15.7839C3.03846 15.6319 2.23206 15.4495 1.44486 15.1887C1.22246 15.1151 1.00326 15.0319 0.787261 14.9407C0.452861 14.7999 0.400061 14.4991 0.376061 14.1983C0.339261 13.7295 0.424061 13.2655 0.473661 12.8031C0.540861 12.1807 0.648061 11.5631 0.801661 10.9551C0.945661 10.3839 1.12006 9.82074 1.43366 9.31994C1.68486 8.91834 2.09126 8.69754 2.52806 8.53754C2.89126 8.40634 3.25606 8.27994 3.61926 8.14714C3.70246 8.11674 3.76166 8.06394 3.80006 7.96794C4.01766 7.40954 4.14246 6.83514 4.19686 6.23674C4.24486 5.71834 4.26726 5.20474 4.19046 4.68794C4.18246 4.62234 4.16806 4.55194 4.21126 4.46234ZM6.56166 13.7135C6.56166 13.8607 6.56806 13.9823 6.56006 14.1039C6.55206 14.2255 6.59046 14.2783 6.72006 14.2719C6.91206 14.2639 7.10406 14.2639 7.29606 14.2719C7.42726 14.2783 7.46086 14.2207 7.45766 14.1023C7.45126 13.8719 7.46246 13.6415 7.45286 13.4111C7.44806 13.2735 7.48806 13.2143 7.63686 13.2207C7.86726 13.2303 8.09766 13.2175 8.32806 13.2255C8.45446 13.2303 8.50086 13.1791 8.49926 13.0575C8.49606 12.8655 8.49126 12.6735 8.50086 12.4831C8.50886 12.3471 8.44326 12.3215 8.32806 12.3231C8.11046 12.3279 7.89286 12.3247 7.67526 12.3279C7.51686 12.3311 7.44166 12.2703 7.45126 12.0991C7.46406 11.8767 7.45286 11.6511 7.45766 11.4271C7.45926 11.3215 7.42406 11.2783 7.31206 11.2815C7.11366 11.2879 6.91526 11.2863 6.71686 11.2815C6.60486 11.2799 6.55526 11.3167 6.55846 11.4367C6.56486 11.6671 6.55206 11.8975 6.56326 12.1279C6.56966 12.2751 6.50246 12.3215 6.37126 12.3215C6.20486 12.3215 6.03846 12.3231 5.87206 12.3247C5.51526 12.3295 5.51526 12.3311 5.51686 12.6943C5.51846 13.2239 5.51846 13.2207 6.04486 13.2255C6.20966 13.2271 6.41926 13.1535 6.52486 13.2607C6.63366 13.3647 6.54406 13.5759 6.56166 13.7135ZM4.88486 3.73594C4.66726 3.73594 4.44966 3.73114 4.23206 3.73754C4.08646 3.74234 4.02726 3.68794 4.02246 3.53754C4.00966 3.16634 3.98406 2.79194 4.03526 2.42554C4.15846 1.55354 4.61926 0.577539 5.76806 0.227139C6.28486 0.0687393 6.80486 -0.0496607 7.33766 0.0191393C8.33926 0.147139 9.22086 0.519939 9.71046 1.47514C10.0257 2.08794 10.0241 2.76794 9.99686 3.44154C9.99526 3.50234 10.0049 3.56474 9.88966 3.54234C9.80006 3.52474 9.78566 3.64154 9.77126 3.70874C9.74886 3.81434 9.71846 3.83034 9.61766 3.77754C9.18086 3.54874 8.89446 3.19194 8.71846 2.74234C8.67046 2.61914 8.64966 2.59674 8.52646 2.68314C7.72806 3.23994 6.84006 3.55194 5.87526 3.67994C5.54566 3.72474 5.21606 3.73914 4.88486 3.73594Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),
      list: "Departments",
    },
    {
      image: (key) => (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.32955 1.3344C6.32955 2.0704 5.73275 2.6688 4.99515 2.6688C4.25755 2.6688 3.66075 2.072 3.66075 1.3344C3.66075 0.5968 4.26075 0 4.99675 0C5.73275 0 6.32955 0.5984 6.32955 1.3344ZM10.3935 12.256C10.136 12.1328 9.82875 12.2416 9.70555 12.4992C8.98875 13.9968 7.45275 14.9648 5.79195 14.9648C3.40155 14.9648 1.45755 13.0208 1.45755 10.6304C1.45755 9.2736 2.07515 8.0192 3.15355 7.1904C3.38075 7.016 3.42235 6.6928 3.24795 6.4656C3.07515 6.24 2.75035 6.1984 2.52475 6.3712C1.18875 7.3984 0.42395 8.9504 0.42395 10.632C0.42395 13.5904 2.83195 16 5.79195 16C7.84635 16 9.74875 14.8 10.6368 12.9456C10.76 12.688 10.6496 12.3792 10.3935 12.256ZM13.5024 12.6544L10.7215 8.1936C10.5887 7.9792 10.3264 7.9296 10.0448 7.9408H6.54395C6.40155 7.9408 6.28635 7.9248 6.28635 7.9072L6.28955 7.8752V7.3072C6.28955 7.1648 6.31195 7.0544 6.34075 7.056C6.35675 7.0576 6.37435 7.0592 6.39355 7.0592H9.44795C9.79195 7.0592 10.072 6.7808 10.072 6.4352C10.072 6.0912 9.79355 5.8112 9.44795 5.8112H6.39355C6.37435 5.8112 6.35835 5.8128 6.34075 5.816C6.31195 5.8176 6.28955 5.7072 6.28955 5.5648V4.1056C6.28955 3.5504 5.83835 3.1008 5.28475 3.1008H5.00635C4.45275 3.1008 4.00315 3.5504 4.00315 4.1056V9.1536C4.00315 9.7072 4.45275 10.1584 5.00635 10.1584H9.81435C9.95675 10.1584 10.1344 10.2544 10.2144 10.3728C10.6976 11.1024 12.2448 13.44 12.2448 13.44C12.4304 13.7392 12.8656 13.808 13.2128 13.5904C13.56 13.3744 13.6896 12.9552 13.5024 12.6544Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),
      list: "Patients",
    },
    {
      image: (key) => (
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.43367C14 0.795269 13.48 0.275269 12.8416 0.275269H1.1584C0.52 0.275269 0 0.795269 0 1.43367V2.08327H14V1.43367ZM0.00159998 4.03047V8.57287C0.00159998 9.21287 0.52 9.73287 1.16 9.73287H12.84C13.48 9.73287 14 9.21287 14 8.57287V4.03047H0.00159998ZM4.2992 8.08007C4.2992 8.12807 4.2592 8.16647 4.2128 8.16647H1.72C1.6736 8.16647 1.6336 8.12807 1.6336 8.08007V7.26887C1.6336 7.22247 1.6736 7.18247 1.72 7.18247H4.2128C4.2592 7.18247 4.2992 7.22247 4.2992 7.26887V8.08007Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),
      list: "Payments",
    },
    {
      image: (key) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6465 6.79995C15.0801 6.35355 14.0225 6.73435 13.1985 7.64955C12.4289 7.43515 11.7457 7.48795 11.1633 7.81595C10.0481 8.44475 9.62567 9.89115 9.46887 10.9903C9.44487 11.1599 9.42247 11.3327 9.39847 11.5055C9.14887 13.4079 8.91207 15.2063 6.65607 15.2063C6.61927 15.2063 6.58247 15.2063 6.54407 15.2047C5.90407 15.1887 5.44327 14.9903 5.13607 14.5967C4.56967 13.8703 4.66727 12.6831 4.73927 12.1903C4.96327 12.0895 5.12167 11.8687 5.12967 11.6079L5.16327 10.6335L6.35847 10.2783C6.50727 10.2335 6.62247 10.1391 6.70567 10.0223C6.92007 10.0703 7.18727 10.0591 7.37607 9.94075C7.70727 9.73435 8.19047 9.33755 8.79207 8.58715C9.44967 7.76635 9.61127 7.10555 9.62727 6.67675C9.63527 6.37115 9.42247 6.06075 9.26407 5.97435C9.10567 5.88795 9.07687 6.04955 9.10727 6.35355C9.15207 6.81115 9.08007 7.50715 8.48967 8.26395C8.47847 8.27675 8.46887 8.28635 8.45927 8.29915L8.46407 8.26555C8.60487 8.04795 8.72647 7.81915 8.81927 7.57435C9.77927 5.03195 7.70407 2.06555 7.61447 1.94075C7.59527 1.91355 7.56967 1.89595 7.54407 1.87515C7.60327 1.73915 7.58887 1.61595 7.48967 1.55195C7.33447 1.45115 7.09127 1.14875 6.95047 0.876747L6.70087 0.399947C6.56167 0.129547 6.26727 0.0815474 6.04647 0.292747L5.42727 0.894347C5.20487 1.10555 5.24807 1.39195 5.51847 1.53435L5.95527 1.75835C6.22567 1.90075 6.52167 2.15675 6.61767 2.33115C6.68967 2.46075 6.85607 2.47995 7.02727 2.39195C7.20327 2.64795 8.91207 5.24155 8.12807 7.31675C8.09607 7.40155 8.04647 7.47995 8.00487 7.56155L8.00007 7.56315C7.95207 7.55195 7.90567 7.53435 7.85607 7.53435C7.73287 7.53435 7.61767 7.57115 7.52167 7.63195L7.66727 7.77115C7.57927 7.87835 7.52007 8.00955 7.52007 8.15835C7.52007 8.19515 7.52807 8.23035 7.53447 8.26555C7.25927 8.56635 6.91527 8.83515 6.49927 9.06395C6.34567 8.97755 6.16007 8.95035 5.97927 9.00475L4.52327 9.43675L2.96487 8.94395C2.78727 8.88795 2.60167 8.91195 2.44967 8.99515C1.70727 8.55515 1.20167 7.99355 0.944073 7.31675C0.123273 5.14235 2.04167 2.39675 2.06087 2.36955C2.06247 2.36475 2.06247 2.35995 2.06727 2.35515C2.06727 2.35515 2.11207 2.39835 2.16807 2.44795C2.22407 2.50075 2.34567 2.40155 2.44167 2.22715C2.53607 2.05115 2.83527 1.79515 3.10567 1.65435L3.54087 1.42875C3.81287 1.28795 3.85447 1.00155 3.63367 0.788747L3.01287 0.188747C2.79207 -0.0240526 2.50087 0.0239474 2.35847 0.295947L2.11047 0.772747C1.96807 1.04475 1.72647 1.34555 1.57127 1.44795C1.41287 1.54715 1.34407 1.68315 1.41287 1.74715L1.53927 1.86555C1.50887 1.88635 1.48167 1.90875 1.45767 1.94075C1.36807 2.06555 -0.707126 5.03195 0.252873 7.57435C0.576073 8.42555 1.19687 9.11835 2.10567 9.64635C2.12967 9.90075 2.30407 10.1279 2.56327 10.2111L3.83527 10.6127L3.80167 11.5615C3.79687 11.7583 3.87847 11.9375 4.00967 12.0655C3.92167 12.6527 3.80487 14.0895 4.55207 15.0479C4.99847 15.6207 5.66247 15.9215 6.52647 15.9423C6.57287 15.9455 6.61767 15.9455 6.66247 15.9455C9.56007 15.9455 9.87687 13.5407 10.1313 11.6031C10.1537 11.4335 10.1761 11.2639 10.2001 11.0959C10.3889 9.77275 10.8593 8.83675 11.5265 8.46075C11.8609 8.27035 12.2625 8.21755 12.7201 8.29755C12.1457 9.24635 12.0737 10.2367 12.5969 10.6527C13.2033 11.1327 14.3777 10.6591 15.2193 9.59515C16.0609 8.53115 16.2513 7.27995 15.6465 6.79995ZM8.35367 8.42555C8.30407 8.48475 8.25447 8.54875 8.20647 8.60315C8.25447 8.54235 8.30247 8.48155 8.34727 8.41915L8.35367 8.42555ZM14.1377 8.71515C13.8225 9.11515 13.3825 9.29275 13.1553 9.11195C12.9889 8.98075 12.9841 8.69435 13.1153 8.39355C13.2353 8.43195 13.3569 8.47355 13.4817 8.52635C13.6721 8.60635 13.8865 8.51995 13.9665 8.33115C14.0465 8.14395 13.9585 7.92635 13.7697 7.84635C13.7137 7.82235 13.6609 7.80475 13.6049 7.78555C13.8625 7.59675 14.1329 7.53915 14.2945 7.66875C14.5233 7.84955 14.4513 8.31835 14.1377 8.71515Z"
            fill={key === keylist.key ? "#336CFB" : "#DBDDE0"}
          />
        </svg>
      ),
      list: "Help",
    },
  ];
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <img src={LittleLogo} alt="Logo" />
      </div>
      <p>MEDICINE</p>
      <ul>
        {SidebarLists.map((item, key) => (
          <li onClick={() => changeClickList(key)} key={key}>
            <NavLink
              onClick={hideSidebar}
              to={key === 0 ? "/dashboard" : "/appointments"}
              key={key}
              style={key === keylist.key ? { color: "#336CFB" } : {}}
            >
              {item.image(key)} <span>{item.list} </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
