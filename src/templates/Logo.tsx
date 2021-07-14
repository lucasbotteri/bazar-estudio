import Image from 'next/image';

import bazarLogo from '../../public/bazar_estudio.png';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image
        src={bazarLogo}
        alt="Logo de Bazar Estudio"
        width={size}
        height={size}
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
