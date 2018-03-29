<template>
  <div class="feature-eat">
    <section class="store">
      <h1 class='store__name'>{{selectedStore.name || ''}}</h1>
      <h2 class='store__address'>{{selectedStore.address || ''}}</h2>
    </section>
    <section class="food">
      <p class='food__name'>{{selectedFood.name}}</p>
      <p class='food__price'>￥ {{(selectedFood.price || 0).toFixed(2)}}</p>
    </section>
    <section class="options">
      <button class="button" @click.stop='pickStore'>换家店</button>
      <button class="button" @click.stop='pickFood'>换道菜</button>
    </section>
    <section class="menu">
      <table>
        <thead>
          <tr>
            <th>菜品名</th>
            <th>参考价</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item, i) in menuList' :key='i'>
            <td v-if='item.type === "food"'>{{item.name}}</td>
            <td v-if='item.type === "food"'>￥{{(item.price || 0).toFixed(2)}}</td>
            <td v-if='item.type === "category"' colspan='2'>{{item.name}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
  import Stores from '../assets/data.js'

  export default {
    name: 'Eat',
    data () {
      return {
        selectedStore: {},
        selectedFood: {},
        menuList: []
      }
    },
    methods: {
      pickStore () {
        const pickableStores = this.selectedStore
          ? Stores.filter(n => n.name !== this.selectedStore.name)
          : Stores
        const random = Math.floor(Math.random() * pickableStores.length)
        this.selectedStore = pickableStores[random]

        const menu = this.selectedStore.menu
        const categories = new Set()
        for (const item of menu) {
          categories.add(item.category)
        }
        const menuList = []
        for (const category of categories) {
          menuList.push({
            type: 'category',
            name: category
          })
          menuList.push(...menu.filter(n => n.category === category).map(n => ({...n, type: 'food'})))
        }
        this.menuList = menuList
        this.pickFood()
      },
      pickFood () {
        const menu = this.selectedStore.menu
        const pickableFoods = this.selectedFood
          ? menu.filter(n => n.name !== this.selectedFood.name)
          : menu
        const random = Math.floor(Math.random() * pickableFoods.length)
        this.selectedFood = pickableFoods[random]
      }
    },
    mounted () {
      this.pickStore()
    }
  }
</script>

<style lang='scss'>
  .store {
    padding: 32px 0 20px;

    &__name {
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 10px;
    }

    &__address {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .food {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    p {
      font-size: 22px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
    }

    &__price {
      white-space: nowrap;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    .button {
      background-color: #000;
      color: #fff;
      border: 1ps solid transparent;
      outline: none;
      cursor: pointer;
      padding: 6px 12px;
      font-size: 20px;
      font-weight: 400px;
      flex-grow: 1;
      flex-shrink: 0;
      white-space: nowrap;

      &:not(:first-of-type) {
        margin-left: 4px;
      }
    }
  }

  .menu {
    padding: 20px 0;

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 0.5em 0;

        &:first-of-type {
          text-align: left;
        }
        &:last-of-type {
          text-align: right;
          white-space: nowrap;
        }
      }

      th {
        border-bottom: 1px solid #000;
      }

      td[colspan='2'] {
        border-bottom: 1px solid #CCC;
        text-align: center;
        padding-top: 20px;
      }
    }
  }

  section {
    &:not(:first-of-type) {
      border-top: 1px dashed #666;
    }

    &:last-of-type {
      border-bottom: 2px solid #000;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: calc(100% + 4px);
        height: 6px;
        width: 100%;
        background-color: #000;
      }
    }
  }
</style>
