<div class="space-y-2">
            <h3 class="text-sm font-semibold text-gray-400 uppercase">{{ t('footer.legal') }}</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <router-link
                  to="/terms"
                  class="text-base text-gray-300 hover:text-white"
                >
                  {{ t('footer.terms') }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/privacy-policy"
                  class="text-base text-gray-300 hover:text-white"
                >
                  {{ t('footer.privacy') }}
                </router-link>
              </li>
            </ul>
          </div>
