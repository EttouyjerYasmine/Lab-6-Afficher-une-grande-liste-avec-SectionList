import { useState } from 'react';
import { Alert, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Données du menu avec IDs ajoutés
const menuItemsToDisplay = [
  {
    id: '1',
    title: 'Appetizers',
    data: [
      { id: '1-1', name: 'Hummus', price: 5.00, originalPrice: '$5.00' },
      { id: '1-2', name: 'Moutabal', price: 5.00, originalPrice: '$5.00' },
      { id: '1-3', name: 'Falafel', price: 7.50, originalPrice: '$7.50' },
      { id: '1-4', name: 'Marinated Olives', price: 5.00, originalPrice: '$5.00' },
      { id: '1-5', name: 'Kofta', price: 5.00, originalPrice: '$5.00' },
      { id: '1-6', name: 'Eggplant Salad', price: 8.50, originalPrice: '$8.50' },
    ],
  },
  {
    id: '2',
    title: 'Main Dishes',
    data: [
      { id: '2-1', name: 'Lentil Burger', price: 10.00, originalPrice: '$10.00' },
      { id: '2-2', name: 'Smoked Salmon', price: 14.00, originalPrice: '$14.00' },
      { id: '2-3', name: 'Kofta Burger', price: 11.00, originalPrice: '$11.00' },
      { id: '2-4', name: 'Turkish Kebab', price: 15.50, originalPrice: '$15.50' },
    ],
  },
  {
    id: '3',
    title: 'Sides',
    data: [
      { id: '3-1', name: 'Fries', price: 3.00, originalPrice: '$3.00' },
      { id: '3-2', name: 'Buttered Rice', price: 3.00, originalPrice: '$3.00' },
      { id: '3-3', name: 'Bread Sticks', price: 3.00, originalPrice: '$3.00' },
      { id: '3-4', name: 'Pita Pocket', price: 3.00, originalPrice: '$3.00' },
      { id: '3-5', name: 'Lentil Soup', price: 3.75, originalPrice: '$3.75' },
      { id: '3-6', name: 'Greek Salad', price: 6.00, originalPrice: '$6.00' },
      { id: '3-7', name: 'Rice Pilaf', price: 4.00, originalPrice: '$4.00' },
    ],
  },
  {
    id: '4',
    title: 'Desserts',
    data: [
      { id: '4-1', name: 'Baklava', price: 3.00, originalPrice: '$3.00' },
      { id: '4-2', name: 'Tartufo', price: 3.00, originalPrice: '$3.00' },
      { id: '4-3', name: 'Tiramisu', price: 5.00, originalPrice: '$5.00' },
      { id: '4-4', name: 'Panna Cotta', price: 5.00, originalPrice: '$5.00' },
    ],
  },
];

// Composant Item avec améliorations
const Item = ({ name, price, currency = 'USD' }) => {
  // Fonction de formatage des prix selon la devise
  const formatPrice = (price, currency) => {
    const exchangeRates = {
      'USD': { symbol: '$', rate: 1 },
      'EUR': { symbol: '€', rate: 0.85 },
      'MAD': { symbol: 'DH', rate: 9.5 }
    };
    
    const rateInfo = exchangeRates[currency] || exchangeRates['USD'];
    const convertedPrice = (price * rateInfo.rate).toFixed(2);
    
    // Mettre en gras si prix > 10 USD (avant conversion)
    const isExpensive = price > 10;
    
    return {
      formatted: `${rateInfo.symbol}${convertedPrice}`,
      isExpensive
    };
  };
  
  const { formatted, isExpensive } = formatPrice(price, currency);
  
  return (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={[
        styles.itemPrice,
        isExpensive && styles.expensivePrice
      ]}>
        {formatted}
      </Text>
    </View>
  );
};

// Composants utilitaires
const Separator = () => <View style={styles.separator} />;

const ListFooter = ({ currency }) => (
  <Text style={styles.listFooterText}>
    All rights reserved by My Restaurant, 2025 | Prices in {currency}
  </Text>
);

// Composant Header avec bouton Promo
const Header = ({ onPromoPress, isPromoActive, onCurrencyChange, currency }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Little Lemon Menu</Text>
    <View style={styles.headerButtons}>
      <TouchableOpacity 
        style={[
          styles.promoButton,
          isPromoActive && styles.promoButtonActive
        ]} 
        onPress={onPromoPress}
      >
        <Text style={styles.promoButtonText}>
          {isPromoActive ? 'Show All' : 'Promo'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.currencyButton}
        onPress={onCurrencyChange}
      >
        <Text style={styles.currencyButtonText}>
          {currency} ▼
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Composant principal
export default function MenuItems() {
  const [isPromoActive, setIsPromoActive] = useState(false);
  const [currency, setCurrency] = useState('USD');
  
  // Fonction pour filtrer les plats en promo (prix < 8 USD)
  const getFilteredMenu = () => {
    if (!isPromoActive) return menuItemsToDisplay;
    
    return menuItemsToDisplay.map(section => ({
      ...section,
      data: section.data.filter(item => item.price < 8)
    })).filter(section => section.data.length > 0);
  };
  
  // Fonction pour changer la devise
  const handleCurrencyChange = () => {
    const currencies = ['USD', 'EUR', 'MAD'];
    const currentIndex = currencies.indexOf(currency);
    const nextIndex = (currentIndex + 1) % currencies.length;
    setCurrency(currencies[nextIndex]);
  };
  
  const renderItem = ({ item }) => (
    <Item name={item.name} price={item.price} currency={currency} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <Header 
        onPromoPress={() => {
          setIsPromoActive(!isPromoActive);
          if (!isPromoActive) {
            Alert.alert(
              'Promo Mode Activated',
              'Showing only items under $8.00',
              [{ text: 'OK' }]
            );
          }
        }}
        isPromoActive={isPromoActive}
        onCurrencyChange={handleCurrencyChange}
        currency={currency}
      />
      
      <SectionList
        sections={getFilteredMenu()}
        keyExtractor={(item) => item.id} // Utilisation de l'ID comme clé
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={() => <ListFooter currency={currency} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No items available in promo mode. Try a different filter!
            </Text>
          </View>
        )}
      />
    </View>
  );
};

// Styles avec améliorations
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    backgroundColor: '#495E57',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#F4CE14',
  },
  headerTitle: {
    color: '#F4CE14',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  promoButton: {
    backgroundColor: '#F4CE14',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 80,
    alignItems: 'center',
  },
  promoButtonActive: {
    backgroundColor: '#EE9972',
  },
  promoButtonText: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  currencyButton: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F4CE14',
    minWidth: 80,
    alignItems: 'center',
  },
  currencyButtonText: {
    color: '#F4CE14',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionHeader: {
    backgroundColor: '#F4CE14',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#333333',
  },
  itemText: {
    color: '#EDEFEE',
    fontSize: 18,
  },
  itemPrice: {
    color: '#EDEFEE',
    fontSize: 18,
  },
  expensivePrice: {
    fontWeight: 'bold',
    color: '#F4CE14',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
    opacity: 0.3,
  },
  listFooterText: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#EDEFEE',
    backgroundColor: '#333333',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#EDEFEE',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});