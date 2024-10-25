import { motion } from 'framer-motion';

const ProductCard = ({ product }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {/* ... contenu de la carte ... */}
  </motion.div>
);

export default ProductCard;
