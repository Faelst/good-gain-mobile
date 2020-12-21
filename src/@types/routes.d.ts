import { RouteProp } from '@react-navigation/native'
type RootStackParamList = {
  Wallet: {
    item: {
      name: string,
      image: ImageURISource,
      dealer: string,
      ag: string,
      cc: string,
      cpf: string,
    };
  }
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Wallet">;

export type PropsWallet = {
  route: ProfileScreenRouteProp;
};