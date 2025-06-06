import HomePage from '../pages/home/home-page';

import KategoriPage from '../pages/kategori/kategori-page';
import ItenaryPage from '../pages/itenary/itenary-page';
import AlamPage from '../pages/wisata-alam/alam-page';
import HiburanPage from '../pages/wisata-hiburan/hiburan-page';
import ReligiPage from '../pages/wisata-religi/religi';
import BelanjaPage from '../pages/wisata-belanja/belanja-page';
import SejarahPage from '../pages/wisata-sejarah/sejarah-page';
import DetailPage from '../pages/detail/detail-page';
import ItenaryDetailPage from '../pages/itenary-detail/itenary-detail-page';

const routes = {
  '/': new HomePage(),
  '/wisata': new KategoriPage(),
  '/alam': new AlamPage(),
  '/hiburan': new HiburanPage(),
  '/religi' : new ReligiPage() ,
  '/belanja': new BelanjaPage(),
  '/sejarah': new SejarahPage(),
  '/itinerary': new ItenaryPage(),
  '/detail': new DetailPage(),
  '/itenary/:id': new ItenaryDetailPage(),

};

export default routes;
