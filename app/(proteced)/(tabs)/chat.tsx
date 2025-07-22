import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Enfant avec React.memo
const ChildButton = React.memo(({ onPress }: { onPress: () => void }) => {
  console.log('🎯 ChildButton rendu');
  return (
    <TouchableOpacity onPress={onPress} style={styles.childButton}>
      <Text style={styles.childButtonText}>Appeler le parent</Text>
    </TouchableOpacity>
  );
});

export default function DemoHooks() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<TextInput>(null);

  // 👉 useRef pour focus sur input
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // 👉 useMemo pour mémoriser un calcul
  const doubleCount = useMemo(() => {
    console.log('🧮 Calcul double...');
    return count * 2;
  }, [count]);

  // 👉 useCallback pour callback stable
  const handleChildAction = useCallback(() => {
    Alert.alert('Callback du parent !');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Hooks Demo</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Tape ici..."
      />
      <TouchableOpacity onPress={handleFocus} style={styles.button}>
        <Text style={styles.buttonText}>Focus Input</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <Text style={styles.counterText}>🧮 Compteur : {count}</Text>
      <TouchableOpacity onPress={() => setCount((prev) => prev + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Incrémenter</Text>
      </TouchableOpacity>
      <Text style={styles.memoText}>Double (useMemo): {doubleCount}</Text>

      <View style={styles.separator} />

      <ChildButton onPress={handleChildAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 18,
    marginVertical: 12,
  },
  memoText: {
    fontStyle: 'italic',
    marginTop: 6,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  childButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
  },
  childButtonText: {
    color: '#fff',
  },
});
