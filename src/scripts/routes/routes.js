import HomePage from '../pages/home/home-page';
<<<<<<< HEAD
import KategoriPage from '../pages/kategori/kategori-page';
import ItenaryPage from '../pages/itenary/itenary-page';
import AlamPage from '../pages/wisata-alam/alam-page';
import HiburanPage from '../pages/wisata-hiburan/hiburan-page';
import ReligiPage from '../pages/wisata-religi/religi';
import BelanjaPage from '../pages/wisata-belanja/belanja-page';
import SejarahPage from '../pages/wisata-sejarah/sejarah-page';

const routes = {
  '/': new HomePage(),
  '/kategori': new KategoriPage(),
  '/alam': new AlamPage(),
  '/hiburan': new HiburanPage(),
  '/religi' : new ReligiPage() ,
  '/belanja': new BelanjaPage(),
  '/sejarah': new SejarahPage(),
  '/itenary': new ItenaryPage(),
=======
import AboutPage from '../pages/about/about-page';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
>>>>>>> ccc1725984285cee101518fcaa734012f4d3d30c
};

export default routes;
