<template>
  <v-app>
    <v-layout
      class="h-100 w-100 position-absolute pl-0 pr-0 pt-0 d-flex align-center justify-center"
      :class="appPrefs.isDark ? 'bg-grey-darken-8' : 'bg-blue-grey-lighten-5'"
    >
      <v-card min-width="30%">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <b>Step {{ step }} of 5</b>
          <v-divider class="mt-2" thickness="2" />
        </v-card-title>

        <v-window class="w-100 h-100 pl-5 pr-5 pt-2" v-model="step">
          <v-window-item style="max-width: 350px" :value="1">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <v-avatar
                size="50"
                variant="outlined"
                icon="mdi-account-outline"
              />
              <i style="font-size: 12px">Tap to change profile</i>
            </div>

            <v-text-field
              color="primary"
              label="Name"
              type="text"
              density="comfortable"
              variant="outlined"
              class="mt-4 w-100"
            />

            <v-text-field
              color="primary"
              label="Email"
              type="email"
              density="comfortable"
              variant="outlined"
              class="w-100"
              icon="mdi-email-outline"
            />

            <v-divider class="mb-5" thickness="2" />

            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  I agree to 
                  <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                      <a
                        target="_blank"
                        href="https://vuetifyjs.com"
                        v-bind="props"
                        @click.stop
                      >
                      terms and conditions
                      </a>
                    </template>
                    Opens in new window
                  </v-tooltip>
                </div>
              </template>
            </v-checkbox>
          </v-window-item>

          <v-window-item :value="2">
            <b>Profession:</b>
            <v-select
              label="Profession:"
              class="mr-2"
              :items="[
                'Student',
                'Teacher',
                'Doctor',
                'Artists',
                'Job worker',
                'Business man',
                'Politician',
                'House wife',
                'Freelancer',
                'Others'
              ]"
            />

            <b>Gender:</b>
            <v-select
              label="Gender"
              class="mr-2"
              :items="['Male', 'Female', 'Others']"
            />

            <b>Date of birth:</b>
            <div class="mt-4 d-flex justify-center">
              <v-select
                label="Month"
                class="mr-2"
                :items="[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ]"
              />
              <v-select
                label="Day"
                class="mr-2"
                :items="[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                ]"
              />
              <v-select
                label="Year"
                :items="[
                  '2023',
                  '2022',
                  '2021',
                  '2020',
                  '2019',
                  '2018',
                  '2017',
                  '2016',
                  '2015',
                  '2014',
                  '2013',
                  '2012',
                  '2011',
                  '2010',
                  '2009',
                  '2008',
                  '2007',
                  '2006',
                  '2005',
                  '2004',
                  '2003',
                  '2002',
                  '2001',
                  '2000',
                  '1999',
                  '1998',
                  '1997',
                  '1996',
                  '1995',
                  '1994',
                  '1993',
                  '1992',
                  '1991',
                  '1990',
                  '1989',
                  '1988',
                  '1987',
                  '1986',
                  '1985',
                  '1984',
                  '1983',
                  '1982',
                  '1981',
                  '1980',
                  '1979',
                  '1978',
                  '1977',
                  '1976',
                  '1975',
                  '1974',
                  '1973',
                  '1972',
                  '1971',
                  '1970',
                  '1969',
                  '1968',
                  '1967',
                  '1966',
                  '1965',
                  '1964',
                  '1963',
                  '1962',
                  '1961',
                  '1960',
                  '1959',
                  '1958',
                  '1957',
                  '1956',
                  '1955',
                  '1954',
                  '1953',
                  '1952',
                  '1951',
                  '1950',
                  '1949',
                  '1948',
                  '1947',
                  '1946',
                  '1945',
                  '1944',
                  '1943',
                  '1942',
                  '1941',
                  '1940',
                  '1939',
                  '1938',
                  '1937',
                  '1936',
                  '1935',
                  '1934',
                  '1933',
                  '1932',
                  '1931',
                  '1930',
                  '1929',
                  '1928',
                  '1927',
                  '1926',
                  '1925',
                  '1924',
                  '1923',
                  '1922',
                  '1921',
                  '1920',
                  '1919',
                  '1918',
                  '1917',
                  '1916',
                  '1915',
                  '1914',
                  '1913',
                  '1912',
                  '1911',
                  '1910',
                  '1909',
                  '1908',
                  '1907',
                  '1906',
                  '1905',
                  '1904',
                  '1903',
                  '1902',
                  '1901',
                  '1900',
                ]"
              />
            </div>
          </v-window-item>

          <v-window-item style="width: 350px; max-width: 350px" :value="3">
            <v-card-text>
              <v-text-field
                label="Password"
                variant="underlined"
                type="password"
              ></v-text-field>
              <v-text-field
                variant="underlined"
                label="Confirm Password"
                type="password"
              ></v-text-field>
              <span class="text-caption text-grey-darken-1">
                Please enter a password for your account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item style="max-width: 300px" :value="4">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
              <span class="text-caption text-grey">Thanks for signing up!</span>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn v-if="step > 1" variant="text" @click="step--">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="step < 4"
            color="primary"
            class="pr-3"
            append-icon="mdi-arrow-right"
            variant="flat"
            @click="step++"
          >
            Next
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-app>
</template>
<script setup>
import { ref } from "vue";

import { useAppPrefsStore } from "@/store/appPrefs";

const appPrefs = useAppPrefsStore();

const step = ref(1);
const checkbox = ref(false);
</script>
