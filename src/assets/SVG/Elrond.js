import styled from "styled-components";

const StyledSVG = styled("svg")`
    display: flex;
    align-items: center;
    order: 1
    width: 24px;
    height: 24px;
`;

const ElrondLogo = () => {
  return (
    <StyledSVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.74434 5.11871C9.01933 4.27497 10.4256 3.88122 11.9818 3.86247C13.5005 3.86247 14.9068 4.27497 16.2193 5.11871L18.9192 2.41873C16.8005 0.806243 14.513 0 11.9818 0C9.45057 0 7.12559 0.806243 5.06311 2.41873L7.74434 5.11871ZM19.182 4.76236C19.0883 4.66861 19.032 4.57486 19.032 4.44361C19.032 4.31237 19.0883 4.21862 19.182 4.12487C19.3695 3.95612 19.6695 3.95612 19.8758 4.12487C19.9695 4.21862 20.0258 4.31237 20.0258 4.44361C20.0258 4.57486 19.9695 4.66861 19.8758 4.76236C19.782 4.83736 19.6508 4.89361 19.5383 4.89361C19.407 4.91236 19.2758 4.87486 19.182 4.76236ZM17.9814 6.05634C17.9064 5.96259 17.8502 5.86885 17.8502 5.7376C17.8502 5.60635 17.9064 5.5126 17.9814 5.41885C18.1502 5.2501 18.4502 5.2501 18.6189 5.41885C18.6939 5.5126 18.7502 5.60635 18.7502 5.7376C18.7502 5.86885 18.6939 5.96259 18.6189 6.05634C18.5252 6.13134 18.4314 6.18759 18.3002 6.18759C18.1689 6.18759 18.0752 6.13134 17.9814 6.05634ZM16.5376 6.97493C16.5376 7.10618 16.5939 7.21868 16.6689 7.29368C16.7439 7.36868 16.8564 7.42493 16.9876 7.42493C17.1189 7.42493 17.2126 7.38743 17.3064 7.29368C17.3814 7.19993 17.4376 7.10618 17.4376 6.97493C17.4376 6.84368 17.3814 6.73118 17.3064 6.65619C17.1376 6.48744 16.8376 6.48744 16.6689 6.65619C16.5939 6.74993 16.5376 6.84368 16.5376 6.97493ZM15.4127 8.54982C15.3189 8.47482 15.2627 8.36232 15.2627 8.23107C15.2627 8.09982 15.3189 8.00608 15.4127 7.91233C15.6002 7.74358 15.9002 7.74358 16.1064 7.91233C16.2002 7.98733 16.2564 8.09982 16.2564 8.23107C16.2564 8.36232 16.2002 8.47482 16.1064 8.54982C16.0127 8.64357 15.8814 8.68107 15.7689 8.68107C15.6377 8.68107 15.5252 8.66232 15.4127 8.54982ZM14.0808 9.48745C14.0808 9.6187 14.1183 9.7312 14.2121 9.80619C14.2871 9.91869 14.4183 9.95619 14.5308 9.93744C14.662 9.93744 14.7745 9.89994 14.8495 9.80619C14.9245 9.7312 14.9808 9.6187 14.9808 9.48745C14.9808 9.3562 14.9433 9.2437 14.8495 9.1687C14.6808 8.99995 14.3808 8.99995 14.2121 9.1687C14.1371 9.26245 14.0808 9.3562 14.0808 9.48745ZM12.7692 10.7436C12.7692 10.6123 12.8254 10.5186 12.9004 10.4248C13.0692 10.2561 13.3692 10.2561 13.5379 10.4248C13.6317 10.5186 13.6692 10.6123 13.6692 10.7436C13.6692 10.8748 13.6129 10.9686 13.5379 11.0623C13.4629 11.1373 13.3504 11.1936 13.2192 11.1936C13.0879 11.1936 12.9942 11.1373 12.9004 11.0623C12.8067 10.9873 12.7692 10.8748 12.7692 10.7436ZM10.2926 13.1999C10.2926 13.3312 10.3489 13.4437 10.4239 13.5187C10.5176 13.6312 10.6301 13.6687 10.7426 13.6499C10.8739 13.6499 10.9864 13.6124 11.0614 13.5187C11.1364 13.4249 11.1926 13.3312 11.1926 13.1999C11.1926 13.0687 11.1551 12.9749 11.0614 12.8812C10.8926 12.7124 10.5926 12.7124 10.4239 12.8812C10.3489 12.9749 10.2926 13.0687 10.2926 13.1999ZM9.13196 14.7748C9.03822 14.6998 8.98197 14.5873 8.98197 14.4561C8.98197 14.3248 9.03822 14.2311 9.13196 14.1373C9.31946 13.9686 9.61946 13.9686 9.82571 14.1373C9.91946 14.2311 9.97571 14.3248 9.97571 14.4561C9.97571 14.5873 9.91946 14.6811 9.82571 14.7748C9.73196 14.8686 9.60071 14.9061 9.48821 14.9061C9.33821 14.9248 9.22571 14.8686 9.13196 14.7748ZM7.7813 15.731C7.7813 15.8623 7.83755 15.9748 7.91255 16.0498L7.9336 16.0638C8.03482 16.1317 8.1084 16.181 8.2313 16.181C8.36255 16.181 8.45629 16.1435 8.55004 16.0498C8.62504 15.956 8.68129 15.8623 8.68129 15.731C8.68129 15.5998 8.62504 15.4873 8.55004 15.4123C8.38129 15.2435 8.0813 15.2435 7.91255 15.4123C7.83755 15.4873 7.7813 15.5998 7.7813 15.731ZM6.65735 17.3064C6.5636 17.2314 6.5261 17.1189 6.5261 16.9876C6.5261 16.8564 6.58235 16.7626 6.65735 16.6689C6.8261 16.5001 7.12609 16.5001 7.29484 16.6689C7.36984 16.7626 7.42609 16.8564 7.42609 16.9876C7.42609 17.1189 7.36984 17.2314 7.29484 17.3064C7.20109 17.4001 7.10734 17.4376 6.97609 17.4376C6.8636 17.4376 6.73235 17.4001 6.65735 17.3064ZM5.21355 18.2438C5.21355 18.375 5.2698 18.4875 5.36354 18.5625C5.43854 18.6563 5.55104 18.6938 5.68229 18.6938C5.79479 18.6938 5.92604 18.6375 6.01979 18.5625C6.11354 18.4875 6.16979 18.375 6.16979 18.2438C6.16979 18.1125 6.11354 18.0188 6.01979 17.925C5.85104 17.7563 5.55104 17.7563 5.36354 17.925C5.2698 18.0188 5.21355 18.1125 5.21355 18.2438ZM4.12438 19.8186C4.03063 19.7249 3.99313 19.6311 3.99313 19.4999C3.99313 19.3687 4.04938 19.2749 4.12438 19.1812C4.29313 19.0124 4.59313 19.0124 4.76188 19.1812C4.85563 19.2749 4.89313 19.3687 4.89313 19.4999C4.89313 19.6311 4.83688 19.7249 4.76188 19.8186C4.68688 19.8936 4.57438 19.9499 4.44313 19.9499C4.34938 19.9686 4.23688 19.9124 4.12438 19.8186ZM4.89313 4.44361C4.89313 4.57486 4.83688 4.66861 4.76188 4.76236C4.68688 4.87486 4.57438 4.91236 4.44313 4.89361C4.31188 4.89361 4.19938 4.83736 4.12438 4.76236C4.04938 4.66861 3.99313 4.57486 3.99313 4.44361C3.99313 4.31237 4.03063 4.21862 4.12438 4.12487C4.29313 3.95612 4.59313 3.95612 4.76188 4.12487C4.83688 4.21862 4.89313 4.31237 4.89313 4.44361ZM6.01874 6.05634C6.11249 5.96259 6.16874 5.86885 6.16874 5.7376C6.16874 5.60635 6.11249 5.5126 6.01874 5.41885C5.83124 5.2501 5.53124 5.2501 5.325 5.41885C5.23125 5.5126 5.175 5.60635 5.175 5.7376C5.175 5.86885 5.23125 5.96259 5.325 6.05634C5.41874 6.13134 5.54999 6.18759 5.66249 6.18759C5.79374 6.16884 5.92499 6.13134 6.01874 6.05634ZM7.42609 6.97493C7.42609 7.10618 7.36984 7.21868 7.29484 7.29368C7.20109 7.36868 7.08859 7.42493 6.97609 7.42493C6.84485 7.42493 6.7511 7.38743 6.65735 7.29368C6.58235 7.19993 6.5261 7.10618 6.5261 6.97493C6.5261 6.84368 6.58235 6.73118 6.65735 6.65619C6.8261 6.48744 7.12609 6.48744 7.29484 6.65619C7.36984 6.74993 7.42609 6.84368 7.42609 6.97493ZM8.55004 8.54982C8.62504 8.47482 8.68129 8.36232 8.68129 8.23107C8.68129 8.09982 8.62504 8.00608 8.55004 7.91233C8.38129 7.74358 8.0813 7.74358 7.91255 7.91233C7.83755 7.98733 7.7813 8.09982 7.7813 8.23107C7.7813 8.36232 7.83755 8.47482 7.91255 8.54982C8.0063 8.64357 8.10005 8.68107 8.2313 8.68107C8.34379 8.68107 8.45629 8.66232 8.55004 8.54982ZM9.93821 9.48745C9.93821 9.6187 9.88196 9.7312 9.78821 9.80619C9.71321 9.91869 9.58196 9.95619 9.46946 9.93744C9.35696 9.93744 9.22571 9.89994 9.13196 9.80619C9.03822 9.7312 8.98197 9.6187 8.98197 9.48745C8.98197 9.3562 9.03822 9.2437 9.13196 9.1687C9.30071 8.99995 9.61946 8.99995 9.78821 9.1687C9.88196 9.26245 9.93821 9.3562 9.93821 9.48745ZM11.1926 10.7436C11.1926 10.6123 11.1364 10.5186 11.0614 10.4248C10.8926 10.2561 10.5926 10.2561 10.4239 10.4248C10.3301 10.5186 10.2926 10.6123 10.2926 10.7436C10.2926 10.8748 10.3489 10.9686 10.4239 11.0623C10.4989 11.1373 10.6114 11.1936 10.7426 11.1936C10.8739 11.1936 10.9676 11.1373 11.0614 11.0623C11.1551 10.9873 11.1926 10.8748 11.1926 10.7436ZM12.4488 12.0185C12.4488 12.1498 12.4113 12.2435 12.3175 12.3373C12.2425 12.4123 12.13 12.4685 11.9988 12.4685C11.8675 12.4685 11.755 12.4123 11.68 12.3373C11.605 12.2435 11.5488 12.1498 11.5488 12.0185C11.5488 11.8873 11.5863 11.7935 11.68 11.6998C11.8488 11.531 12.1488 11.531 12.3175 11.6998C12.3925 11.7935 12.4488 11.8873 12.4488 12.0185ZM13.5754 13.5187C13.6692 13.4437 13.7254 13.3312 13.7254 13.1999C13.7254 13.0687 13.6692 12.9749 13.5754 12.8812C13.3879 12.7124 13.0879 12.7124 12.9192 12.8812C12.8254 12.9749 12.7692 13.0687 12.7692 13.1999C12.7692 13.3312 12.8254 13.4249 12.9192 13.5187C13.0129 13.6124 13.1442 13.6499 13.2567 13.6499C13.3504 13.6687 13.4817 13.6312 13.5754 13.5187ZM14.9808 14.4561C14.9808 14.5873 14.9245 14.6998 14.8495 14.7748C14.7558 14.8686 14.6245 14.9248 14.5308 14.9061C14.3996 14.9061 14.3058 14.8686 14.2121 14.7748C14.1371 14.6811 14.0808 14.5873 14.0808 14.4561C14.0808 14.3248 14.1371 14.2311 14.2121 14.1373C14.3808 13.9686 14.6808 13.9686 14.8495 14.1373C14.9245 14.2311 14.9808 14.3248 14.9808 14.4561ZM16.1066 16.0498C16.1816 15.9748 16.2379 15.8623 16.2379 15.731C16.2379 15.5998 16.1816 15.4873 16.1066 15.4123C15.9379 15.2435 15.6379 15.2435 15.4691 15.4123C15.3941 15.4873 15.3379 15.5998 15.3379 15.731C15.3379 15.8623 15.3941 15.956 15.4691 16.0498C15.5629 16.1435 15.6566 16.181 15.7879 16.181C15.9191 16.181 16.0129 16.1248 16.1066 16.0498ZM17.4179 16.9876C17.4179 17.1189 17.3804 17.2314 17.2866 17.3064C17.2116 17.4001 17.0804 17.4376 16.9679 17.4376C16.8366 17.4376 16.7429 17.4001 16.6491 17.3064C16.5741 17.2314 16.5179 17.1189 16.5179 16.9876C16.5179 16.8564 16.5741 16.7626 16.6491 16.6689C16.8179 16.5001 17.1179 16.5001 17.2866 16.6689C17.3616 16.7626 17.4179 16.8564 17.4179 16.9876ZM18.6189 18.5625C18.7127 18.4875 18.7502 18.375 18.7502 18.2438C18.7502 18.1125 18.6939 18.0188 18.6189 17.925C18.4502 17.7563 18.1502 17.7563 17.9814 17.925C17.8877 18.0188 17.8502 18.1125 17.8502 18.2438C17.8502 18.375 17.9064 18.4875 17.9814 18.5625C18.0564 18.6375 18.1689 18.6938 18.3002 18.6938C18.4314 18.6938 18.5439 18.6563 18.6189 18.5625ZM20.024 19.4999C20.024 19.6311 19.9678 19.7249 19.874 19.8186C19.7615 19.9124 19.649 19.9686 19.5553 19.9499C19.4428 19.9499 19.3115 19.8936 19.2178 19.8186C19.124 19.7249 19.0678 19.6311 19.0678 19.4999C19.0678 19.3687 19.124 19.2749 19.2178 19.1812C19.3865 19.0124 19.6865 19.0124 19.874 19.1812C19.9678 19.2749 20.024 19.3687 20.024 19.4999ZM3.76872 12C3.76872 13.5 4.18122 14.8875 5.04371 16.2L2.38123 18.9375C0.787494 16.8375 0 14.5312 0 12.0188C0 9.46878 0.787494 7.1813 2.36248 5.11882L5.04371 7.80005C4.18122 9.07504 3.76872 10.4813 3.76872 12ZM16.2005 18.8809C14.9255 19.7434 13.5192 20.1934 12.0005 20.2121C10.4443 20.2121 9.01927 19.7996 7.74428 18.8996L5.04431 21.5809C7.12554 23.2121 9.45052 24.0183 12.0005 23.9996C14.5317 23.9809 16.8192 23.1559 18.8817 21.5809L16.2005 18.8809ZM20.118 12.0375C20.1555 10.5 19.7055 9.075 18.843 7.76251L21.543 5.02503C23.1743 7.10626 23.9805 9.43124 23.9618 11.9812C23.9618 14.4937 23.1368 16.7812 21.543 18.8437L18.843 16.1624C19.668 14.9062 20.0993 13.5375 20.118 12.0375ZM21.6563 19.7247C22.6876 19.7247 23.5501 20.5685 23.5501 21.6185C23.5501 22.6497 22.7063 23.5122 21.6563 23.5122C20.6251 23.5122 19.7626 22.6685 19.7626 21.6185C19.7626 20.5685 20.6063 19.7247 21.6563 19.7247ZM4.2182 21.6185C4.2182 20.5685 3.37446 19.7247 2.34322 19.7247C1.31198 19.7247 0.468232 20.5685 0.468232 21.6185C0.468232 22.6685 1.31198 23.5122 2.34322 23.5122C3.37446 23.5122 4.2182 22.6497 4.2182 21.6185ZM21.693 0.412524C22.7243 0.412524 23.568 1.25627 23.568 2.30626C23.568 3.35625 22.7243 4.19999 21.693 4.19999C20.6618 4.19999 19.8181 3.35625 19.8181 2.30626C19.8181 1.25627 20.6618 0.412524 21.693 0.412524ZM4.20023 2.28751C4.20023 1.25627 3.33773 0.412524 2.30649 0.412524C1.2565 0.412524 0.412759 1.25627 0.412759 2.28751C0.412759 3.31875 1.27525 4.16249 2.30649 4.16249C3.35648 4.16249 4.20023 3.31875 4.20023 2.28751Z"
        fill="white"
      />
    </StyledSVG>
  );
};

export default ElrondLogo;
