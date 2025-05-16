import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

// それぞれのファイルで定義したauthとdataをまとめてCloudFormationで構築
defineBackend({
  auth,
  data,
});
