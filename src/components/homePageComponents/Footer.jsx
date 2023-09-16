import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className='p-4 grid gap-2 text-base text-center mt-5'>
      <div className='socials flex gap-3 justify-center'>
        <Facebook fontSize='large' color='#111827' />
        <Instagram fontSize='large' color='#111827' />
        <Twitter fontSize='large' color='#111827' />
        <YouTube fontSize='large' color='#111827' />
      </div>

      <div className='other-links flex gap-2 justify-center font-bold'>
        <a href='/' className='hover:underline'>
          Conditions of Use
        </a>
        <a href='/' className='hover:underline'>
          Privacy &amp; Policy
        </a>
        <a href='/' className='hover:underline'>
          Press Room
        </a>
      </div>

      <p className='copyright font-bold text-gray'>
        &copy; MovieBox by Adriana Eka Prayudha
      </p>
      <p className='copyright font-bold text-gray'>Coded by Daniel Ezekiel</p>
    </footer>
  );
};

export default Footer;
