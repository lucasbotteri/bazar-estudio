import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.instagram.com/bazar_estudio/">
            <a>Instagram</a>
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/5492216129074?text=Hola%20les%20quiero%20comprar%20todo%20el%20bazar">
            <a>Whatsapp</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Bienvenidos a\n'}
            <span className="text-primary-500">Bazar Estudio</span>
          </>
        }
        description="Consegui los mejores productos de bazar y deco. Envios a todo el pais. Aceptamos efectivo y Mercadopago"
        button={
          <Link href="https://www.instagram.com/bazar_estudio/">
            <a>
              <Button xl>Seguinos en Instagram</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
