import { Toast as ToastBase } from 'native-base';

export class Toast {
  static show(message: string, type: 'success' | 'error' = 'success') {
    ToastBase.show({
      text: message,
      buttonText: undefined,
      position: 'bottom',
      duration: 5000,
      style: { backgroundColor: type === 'success' ? 'green' : 'red' }
    });
  }
}
