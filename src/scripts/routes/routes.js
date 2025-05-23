import HomePage from '../pages/home/home-page';

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

};

export default routes;
